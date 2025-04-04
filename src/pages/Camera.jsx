import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { CameraIcon, Check, Repeat } from 'lucide-react';

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
    <div className='h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300'>

      {/* header section */}
      <Header />

      {/* body content inclues titles, image capturing ui componnets */}
      <div className='relative h-[calc(100%_-_80px)] w-full flex justify-center md:items-center'>

        <div className='relative h-[calc(100%_-_80px)] w-full p-10 md:p-0 md:grid md:grid-cols-2 items-center'>

          <div className='flex justify-end'>
            {!capturedImage ? (
              <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className='w-[640px] rounded-2xl shadow-2xl'
              />
            ) : (
              <img src={capturedImage} alt="captured" />
            )}
          </div>

          <div className='mt-[24px] text-center md:text-left md:pl-10 md:mt-0'>
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-3 animate-fade-in-up'>Capture Your Emotion</h1>
            <p className='text-[16px] md:text-[18px] text-gray-600 dark:text-gray-400 md:w-8/12'>Capture a photo of your face today, so you can look back and see how time has shaped your story.</p>

            {/* button section */}
            <div className='mt-8 flex justify-center md:justify-start'>
              {!capturedImage ? (
                <button className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-white flex items-center cursor-pointer gap-3 text-[18px] border-[1px] border-x-sky-500 border-y-sky-400' onClick={capture}>
                  <CameraIcon className='text-blue-400' />
                  Capture
                </button> 
              ) : (
                <div className='flex gap-4'>
                  <button className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-green-900/30 dark:to-green-800/30 text-white flex items-center cursor-pointer gap-3 text-[18px] border-[1px] border-x-green-500 border-y-green-300' onClick={handleSubmit}>
                    <Check className='text-green-400' />
                    Confirm
                  </button>
                  <button className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-white flex items-center cursor-pointer gap-3 text-[18px] border-[1px] border-x-sky-500 border-y-sky-400' onClick={retake}>
                    <Repeat className='text-blue-400'/>
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
