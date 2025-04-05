import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { CameraIcon, Check, Repeat } from "lucide-react";

const Camera = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const navigate = useNavigate();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const retake = () => {
    setCapturedImage(null);
  };

  const handleSubmit = () => {
    if (capturedImage) {
      navigate("/preview", { state: { image: capturedImage } });
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Header />

      <div className="relative h-[calc(100%_-_80px)] w-full flex justify-center md:items-center">
        <div className="relative h-[calc(100%_-_80px)] w-full p-10 md:p-0 md:grid md:grid-cols-2 items-center">
          <div className="flex justify-end">
            {!capturedImage ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-[640px] rounded-2xl shadow-2xl"
              />
            ) : (
              <img src={capturedImage} alt="captured" />
            )}
          </div>

          <div className="mt-[24px] text-center md:text-left md:pl-10 md:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-3 animate-fade-in-up">
              Capture Your Emotion
            </h1>
            <p className="text-[16px] md:text-[18px] text-gray-600 dark:text-gray-400 md:w-8/12">
              Capture a photo of your face today, so you can look back and see
              how time has shaped your story.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              {!capturedImage ? (
                <button
                  onClick={capture}
                  className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                >
                  <CameraIcon className="w-5 h-5 text-white" />
                  Capture
                </button>
              ) : (
                <div className="flex gap-4">
                  <button
                    onClick={handleSubmit}
                    className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900"
                  >
                    <Check className="w-5 h-5 text-white" />
                    Confirm
                  </button>

                  <button
                    onClick={retake}
                    className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                  >
                    <Repeat className="w-5 h-5 text-white" />
                    Retake
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
