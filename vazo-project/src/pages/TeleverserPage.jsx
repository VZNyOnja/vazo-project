import { MainHeader } from '../components/MainHeader';
import './TeleverserPage.css';
import { useRef, useState } from 'react';


// La page téléverser
export function TeleverserPage() {
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);
  const [transcription, setTranscription] = useState(null);

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("audio_file", file);

    setIsUploading(true);

    try {
      const response = await fetch("http://localhost:5000/transcribe", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setTranscription(data.words); // liste [{text, start, end}]
    } catch (error) {
      console.error("Erreur d'upload :", error);
    } finally {
      setIsUploading(false);
    }
  };


  return (
    <>
      <title>Téléverser Page</title>

      <MainHeader />

      <div className="main-televerser-page">
        <div className="televerser-audio-container">
          <img className="fermer-icone" src="/images/fermer.png" alt="bouton fermer" />
          <div className="televerser-audio">
            <img className="televerser-icone" src="/images/televerser-fichier.png" alt="icône téléverser" />
            <div className="televerser-un-audio">Téléverser un audio</div>
            <div className="action-televerser" onClick={handleChooseFileClick} style={{ cursor: 'pointer' }}>
              <span className="choose-file">Choisir un fichier</span> ou faites-les glissez ici
            </div>
            <input
              type="file"
              accept="audio/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {isUploading && <div className="uploading-message">Transcription en cours...</div>}

            {transcription && (
              <div className="transcription">
                {transcription.map((word, index) => (
                  <span key={index}>{word.text} </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}