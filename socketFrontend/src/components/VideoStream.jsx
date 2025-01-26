import React, { useEffect, useRef } from "react";

const VideoStream = () => {
    const videoRef = useRef(null);
     // Reference for the video element
(()=>{
    console.log("rendered")
})()
    useEffect(() => {
        // Request access to the user's camera and microphone
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                console.log("streammm......>",stream)
                if (videoRef.current) {
                    videoRef.current.srcObject = stream; // Set the video stream to the video element
                }
            })
            .catch((error) => {
                console.error("Error accessing media devices:", error);
            });
    }, []);

    return (
      <>
        <div>
            <h1>My Video Stream</h1>
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
            />
        </div>
        <button onClick={()=>{
            console.log(videoRef.current.srcObject.getTracks())
            videoRef.current.srcObject.getTracks().forEach((track) => {
                track.stop(); // Stop all tracks
            });
        }}>Stop</button>
      </>
    );
};

export default VideoStream;
