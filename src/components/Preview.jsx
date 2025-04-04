import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Preview = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { image } = location.state;

  const sendImageToWebSocket = async () => {
    setLoading(true);
    const email = localStorage.getItem('userEmail');
    const ws = new WebSocket('YOUR_WEBSOCKET_API_URL');

    console.log(JSON.stringify({ email, image })); // print json output

    ws.onopen = () => {
      ws.send(JSON.stringify({ email, image }));
    };

    ws.onmessage = (event) => {
      const responseImage = JSON.parse(event.data).image;
      setResponse(responseImage);
      setLoading(false);
      ws.close();
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
      setLoading(false);
    };
  };

  const handleTryAgain = () => {
    navigate('/camera');
  };

  return (
    <div>
      <h1>Preview</h1>
      <img src={image} alt="preview" />
      <div>
        {!response && !loading && (
          <button onClick={sendImageToWebSocket}>Confirm and Send</button>
        )}
        <button onClick={handleTryAgain}>Try Again</button>
      </div>
      
      {loading && (
        <div>
          <p>Processing your image...</p>
          <div className="loading-spinner"></div>
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
  );
};

export default Preview;
