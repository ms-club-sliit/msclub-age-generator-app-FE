export const sendImageViaWebSocket = ({ email, image, type }) => {
    return new Promise((resolve, reject) => {
      const socket = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL);
  
      socket.onopen = () => {
        const base64Data = image.replace(/^data:image\/[a-z]+;base64,/, "");
        socket.send(JSON.stringify({ email, type, image: base64Data }));
      };
  
      socket.onmessage = (event) => {
        const response = JSON.parse(event.data);
  
        if (response.status === "success" && response.generated_image) {
          resolve(`data:image/png;base64,${response.generated_image}`);
        } else {
          reject(new Error(response.message || "Unknown WebSocket error"));
        }
  
        socket.close();
      };
  
      socket.onerror = (error) => {
        reject(new Error("WebSocket error occurred"));
      };
  
      socket.onclose = () => {
        console.log("WebSocket connection closed");
      };
    });
  };
  