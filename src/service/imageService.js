export const sendImageViaWebSocket = ({ email, image }) => {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket('YOUR_WEBSOCKET_API_URL');
        console.log(JSON.stringify({ email, image })); //for debug
        ws.onopen = () => {
            const payload = JSON.stringify({ email, image });
            //console.log(payload); // debug log
            ws.send(payload);
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                resolve(data.image);
            } catch (err) {
                reject('Failed to parse WebSocket response');
            } finally {
                ws.close();
            }
        };

        ws.onerror = (error) => {
            reject(`WebSocket error: ${error.message}`);
        };
    });
};
