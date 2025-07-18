import { useState, useRef  } from "react";

export default function Montage2() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [frames, setFrames] = useState([]);
  const videoRef = useRef(null);

  // Ajout d'un bloc "overlay" qui dure 10 secondes
  const overlays = [
    { start: 5, duration: 10, label: "Image 1" },
    { start: 20, duration: 8, label: "Texte" }
  ];

  const pxPerSec = 20; // 1 seconde = 20px

  // Fonction pour extraire les frames
  const extractFrames = (videoElement, intervalSec = 2) => {
    const duration = videoElement.duration;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const framesTemp = [];

    const captureFrame = (time) =>
      new Promise((resolve) => {
        videoElement.currentTime = time;
        videoElement.onseeked = () => {
          // Taille miniature
          canvas.width = videoElement.videoWidth / 8;
          canvas.height = videoElement.videoHeight / 8;
          ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const imgData = canvas.toDataURL("image/png");
          framesTemp.push({ time, src: imgData });
          resolve();
        };
      });

    const processFrames = async () => {
      for (let t = 0; t < duration; t += intervalSec) {
        await captureFrame(t);
      }
      setFrames(framesTemp);
    };

    processFrames();
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  // Quand la vidéo est prête, on lance l’extraction
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      extractFrames(videoRef.current, 2); // une frame toutes les 2s
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mini éditeur vidéo</h2>

      {/* Importer une vidéo */}
      <input type="file" accept="video/*" onChange={handleVideoUpload} />

      {videoUrl && (
        <>
          <video
            ref={videoRef}
            src={videoUrl}
            style={{ maxWidth: "100%", marginTop: "10px" }}
            onLoadedMetadata={handleLoadedMetadata}
            controls
          />

          {/* Timeline */}
          <div
            style={{
              position: "relative",
              overflowX: "auto",
              border: "1px solid #ccc",
              marginTop: "20px",
              whiteSpace: "nowrap",
              height: "80px"
            }}
          >
            {/* Frames affichées en bas */}
            <div style={{ display: "flex" }}>
              {frames.map((frame, i) => (
                <div
                  key={i}
                  style={{
                    width: `${pxPerSec * 2}px`, // 2s = largeur bloc
                    height: "60px",
                    borderRight: "1px solid #aaa"
                  }}
                >
                  <img
                    src={frame.src}
                    alt={`frame-${i}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <small style={{ fontSize: "10px" }}>{frame.time.toFixed(1)}s</small>
                </div>
              ))}
            </div>

            {/* Overlays qui apparaissent sur la timeline */}
            {overlays.map((ov, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: "0",
                  left: `${ov.start * pxPerSec}px`,
                  width: `${ov.duration * pxPerSec}px`,
                  height: "60px",
                  background: "rgba(255,0,0,0.3)",
                  textAlign: "center",
                  lineHeight: "60px",
                  fontSize: "12px",
                  color: "#fff"
                }}
              >
                {ov.label}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
