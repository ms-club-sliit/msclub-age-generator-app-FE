import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import { CameraIcon } from 'lucide-react';

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
      navigate('/preview', { state: { image: capturedImage } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fade-in">
              <CameraIcon className="w-4 h-4 mr-2" />
              Camera Preview
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Take Your Photo
            </h1>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-8 animate-fade-in-up">
            {!capturedImage ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-full h-auto rounded-xl"
              />
            ) : (
              <img 
                src={capturedImage} 
                alt="captured" 
                className="w-full h-auto rounded-xl"
              />
            )}
          </div>

          <div className="flex justify-center gap-4">
            {!capturedImage ? (
              <button
                onClick={capture}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg flex items-center"
              >
                <CameraIcon className="w-5 h-5 mr-2" />
                Capture Photo
              </button>
            ) : (
              <>
                <button
                  onClick={retake}
                  className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Retake
                </button>
                <button
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
