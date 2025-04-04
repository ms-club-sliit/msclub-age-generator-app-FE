import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendImageViaWebSocket } from '../service/imageService';
import Header from '../components/Header';
import { Camera, Rotate3D } from 'lucide-react';
import { ScaleLoader } from 'react-spinners';

const Preview = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { image } = location.state;

  const handleSendImage = async () => {
    setLoading(true);
    const email = localStorage.getItem('userEmail');

    try {
      const processedImage = await sendImageViaWebSocket({ email, image });
      setResponse(processedImage);
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    navigate('/camera');
  };

  return (
    <div className='h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300'>

      <Header />
      
      <div className='relative h-[calc(100%_-_80px)] w-full p-10 md:p-0 md:grid md:grid-cols-2 items-center'>

        {/* image previeve */}
        <div className='flex justify-end'>
          <img 
            src={image} 
            alt="image preview" 
            className='w-[640px] rounded-2xl shadow-2xl'
          />
        </div>
        

        <div className='md:pl-10 mt-8 md:mt-0'>

          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-3 animate-fade-in-up md:w-4/5 text-center md:text-left'>Do you ready to see your old look?</h1>

          {/* button section */}
          <div className='flex justify-center md:justify-start gap-3 mt-8 md:mt-12'>
            {!response && !loading && (
              <button className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-green-900/30 dark:to-green-800/30 text-white flex items-center cursor-pointer gap-3 text-[18px] border-[1px] border-x-green-500 border-y-green-300' onClick={handleSendImage}>
                <Rotate3D className='text-green-400' />
                Generate
              </button>
            )}
            <button className='bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-white flex items-center cursor-pointer gap-3 text-[18px] border-[1px] border-x-sky-500 border-y-sky-400' onClick={handleTryAgain}>
              <Camera className='text-blue-400' />
              Retake
            </button>
          </div>

          {/* state */}
          <div>
            {loading && (
              <div className='md:mt-8 mt-4 flex gap-3 items-center h-[50px] bg-green-500/30 border-[1px] border-x-green-500 border-y-green-600 justify-center rounded-xl w-full md:w-3/5 text-green-300'>
                <ScaleLoader color='#4dff79' />
                <p>Processing...</p>
              </div>
            )}

            {response && (
              <div>
                <h2>Processed Image</h2>
                <img src={response} alt="processed" />
                <p>Image successfully processed!</p>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Preview;
