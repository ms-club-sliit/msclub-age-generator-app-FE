import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Camera Preview</h1>
      {!capturedImage ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      ) : (
        <img src={capturedImage} alt="captured" />
      )}
      <div>
        {!capturedImage ? (
          <button onClick={capture}>Capture</button>
        ) : (
          <>
            <button onClick={retake}>Retake</button>
            <button onClick={handleSubmit}>Submit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Camera;
