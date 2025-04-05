import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sendImageViaWebSocket } from "../service/imageService";
import Header from "../components/Header";
import { Camera, Rotate3D } from "lucide-react";
import { ScaleLoader } from "react-spinners";

const transformations = [
  { key: "world_landmark_scene", label: "🌍 See Yourself in a Famous Place" },
  { key: "new_hairstyle", label: "💇‍♀️ Try Out a New Hairstyle" },
  { key: "anime_character", label: "🎨 Animated Version of You" },
  { key: "cinematic_movie_poster", label: "🎬 Cinematic Portraits" },
];

const Preview = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [statusMessage, setStatusMessage] = useState(
    "Preparing your transformation..."
  );
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showThanks, setShowThanks] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { image } = location.state;

  const statusTexts = [
    "Preparing your transformation...",
    "Applying creative enhancements...",
    "Refining the details...",
    "Almost done — hang tight...",
  ];

  useEffect(() => {
    if (!loading) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % statusTexts.length;
      setStatusMessage(statusTexts[index]);
    }, 4000);

    return () => clearInterval(interval);
  }, [loading]);

  const handleSendImage = async () => {
    if (!selectedType) return;
    setLoading(true);
    setErrorMessage(null);

    const email = localStorage.getItem("userEmail");

    try {
      const processedImage = await sendImageViaWebSocket({
        email,
        image,
        type: selectedType,
      });
      setResponse(processedImage);
      setShowModal(true);
      setShowThanks(false);
    } catch (error) {
      console.error("WebSocket failed:", error.message);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    navigate("/camera");
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Header />

      <div className="relative h-[calc(100%_-_80px)] w-full p-10 md:p-0 md:grid md:grid-cols-2 items-center">
        <div className="flex justify-end">
          <img
            src={image}
            alt="image preview"
            className="w-[640px] rounded-2xl shadow-2xl"
          />
        </div>

        <div className="md:pl-10 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-3 animate-fade-in-up md:w-4/5 text-center md:text-left">
            Choose how you want to transform your photo
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 md:w-4/5">
            {transformations.map((option) => (
              <button
                key={option.key}
                onClick={() => setSelectedType(option.key)}
                className={`w-full min-h-[80px] py-5 px-6 text-lg font-semibold rounded-2xl shadow-md text-center whitespace-normal break-words transition-all duration-300 transform ${
                  selectedType === option.key
                    ? "bg-blue-600 text-white shadow-xl scale-[1.02]"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-700 hover:scale-[1.02]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-10">
            <button
              onClick={handleSendImage}
              disabled={!selectedType || loading}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 shadow-md ${
                selectedType && !loading
                  ? "text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <ScaleLoader height={15} color="#ffffff" />
              ) : (
                <>
                  <Rotate3D className="w-5 h-5 text-white" />
                  Generate
                </>
              )}
            </button>

            <button
              onClick={handleTryAgain}
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
            >
              <Camera className="w-5 h-5 text-white" />
              Retake
            </button>
            {errorMessage && (
              <div className="mt-6 md:w-4/5 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl dark:bg-red-900/20 dark:text-red-300 dark:border-red-500">
                <strong>Error:</strong> {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6 text-center animate-fade-in">
            <ScaleLoader height={30} width={5} color="#1e40af" />
            <p className="text-white text-xl font-semibold transition-opacity duration-500 ease-in-out">
              {statusMessage}
            </p>
          </div>
        </div>
      )}

      {(showModal || showThanks) && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-all duration-300 ${
            showThanks ? "bg-black/90" : "bg-black/70 backdrop-blur-xl"
          }`}
        >
          <div className="relative bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-600/40 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] p-6 overflow-auto backdrop-blur-xl animate-fade-in-up">
            <button
              onClick={() => {
                if (showModal) {
                  setShowModal(false);
                  setShowThanks(true);
                } else {
                  setShowThanks(false);
                }
              }}
              className="absolute top-4 right-4 text-white hover:text-red-400 transition text-2xl"
              aria-label="Close"
            >
              ✕
            </button>

            {!showThanks ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white dark:text-gray-100 flex justify-center items-center gap-2">
                    ✨ Your Transformation is Ready!
                  </h2>
                  <p className="text-sm text-white/80 dark:text-gray-300 mt-1">
                    Enjoy your AI-enhanced portrait
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-2 border border-gray-200 dark:border-gray-700">
                    <img
                      src={response}
                      alt="processed"
                      className="rounded-lg max-h-[70vh] max-w-full object-contain"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center mt-10">
                <h2 className="text-3xl font-bold text-white dark:text-white mb-4">
                  🙏 Thank You for Exploring with Us!
                </h2>
                <p className="text-white/90 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                  We’ve sent a detailed email with your{" "}
                  <span className="font-semibold text-blue-300">
                    AI-generated image
                  </span>{" "}
                  along with an{" "}
                  <span className="font-semibold text-blue-300">
                    in-depth technical breakdown
                  </span>{" "}
                  of how we built this experience — covering key aspects like{" "}
                  <span className="font-semibold text-blue-300">
                    real-time WebSocket communication
                  </span>
                  ,
                  <span className="font-semibold text-blue-300">
                    {" "}
                    image processing pipelines
                  </span>
                  , and our use of
                  <span className="font-semibold text-blue-300">
                    {" "}
                    scalable cloud infrastructure
                  </span>{" "}
                  powered by
                  <span className="font-semibold text-blue-300">
                    {" "}
                    serverless functions
                  </span>
                  .
                  <br />
                  <br />
                  Whether you're a tech enthusiast, student, or an aspiring
                  cloud architect — we hope this inspires you to learn, build,
                  and explore even further.
                </p>

                <button
                  onClick={() => navigate("/")}
                  className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Go to Home
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Preview;
