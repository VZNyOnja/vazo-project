import { MainHeader } from '../components/MainHeader';
import './MontagePage.css';
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function MontagePage() {

  const audioRef = useRef(null);
  const [searchParams] = useSearchParams();
  const [words, setWords] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioSrc, setAudioSrc] = useState(null);

  // Récupération du nom du fichier uploadé dans l'URL
  const filename = searchParams.get("file");

  // Charger l'audio et la transcription associée
  useEffect(() => {
    if (!filename) return;
    setWords([]);
    setCurrentTime(0);

    // Chemin vers le fichier audio côté backend
    setAudioSrc(`http://localhost:5000/uploads/${filename}`);

    // Appel API pour récupérer la transcription Whisper
    async function fetchTranscription() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/transcription?file=${encodeURIComponent(
            filename
          )}`
        );
        const data = await res.json();

        if (data.words) {
          setWords(data.words); // [{text, start, end}]
        } else {
          console.warn("Pas de paroles détectées.");
          setWords([]);
        }
      } catch (err) {
        console.error("Erreur transcription:", err);
      }
    }

    fetchTranscription();
  }, [filename]);

  // Mettre à jour le temps courant pour surligner les paroles
  const handleTimeUpdate = () => {
    if (audioRef.current?.currentTime != null) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  return (
    <>
      <title>Montage</title>

      <MainHeader />

      {/* Sidebar d'où il y a les modifications pour le montage */}
      <div className="sidebar">
        <div className="edit">
          <img className="edit-icon" src="/images/police.png" alt="icône de police" />
          <div className="edit-name">Police</div>
        </div>

        <div className="edit">
          <img className="edit-icon" src="/images/couleur.png" alt="icône de couleur" />
          <div className="edit-name">Couleur</div>
        </div>

        <div className="edit">
          <img className="edit-icon" src="/images/arriere-plan.png" alt="icône d'arrière-plan" />
          <div className="edit-name">Arrière-plan</div>
        </div>

        <div className="edit">
          <img className="edit-icon" src="/images/televerser-fichier.png" alt="icône importer" />
          <div className="edit-name">Importer</div>
        </div>

        <div className="edit">
          <img className="edit-icon" src="/images/format.png" alt="icône de format" />
          <div className="edit-name">Format</div>
        </div>
      </div>

      {/* La section du montage */}
      <div className="montage-body">
        <div className="montage-container">
          {/* <img className="video" src="/images/video-lyrics.png"></img>*/}
          {/* Player audio dynamique */}
          {audioSrc && (
            <audio
              ref={audioRef}
              src={audioSrc}
              controls
              onTimeUpdate={handleTimeUpdate}
            />
          )}

          {/* Paroles synchronisées */}
          <div className="lyrics-display">
            {words.length > 0 ? (
              words.map((word, index) => {
                const isActive =
                  currentTime >= word.start && currentTime < word.end;
                return (
                  <span
                    key={index}
                    className={isActive ? "highlight" : ""}
                    style={{
                      marginRight: "6px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {word.text}
                  </span>
                );
              })
            ) : (
              <p>Chargement des paroles...</p>
            )}
          </div>
          <div className="audio-controls">
            {/* <img className="control-icon" src="/images/stop.png" alt="icône" /> */}
            {/* <img className="control-icon" src="/images/retour.png" alt="icône" /> */}
            <img className="control-icon" src="/images/previous.png" alt="icône" />
            {/* <img className="control-icon play" src="/images/play.png" alt="icône" /> */}
            <img className="control-icon pause" src="/images/pause.png" alt="icône" />
            <img className="control-icon" src="/images/next.png" alt="icône" />
            {/* <img className="control-icon" src="/images/continuer.png" alt="icône" /> */}
          </div>

          <div className="timeline">
            <div className="play-mark">
              <img className="playzone" src="/images/playzone.png" alt="" />
              <img className="line" src="/images/line.png" alt="" />
            </div>
            <div className="time">
              <div className="time-ms">10ms</div>
              <div className="time-ms">20ms</div>
              <div className="time-ms">30ms</div>
              <div className="time-ms">40ms</div>
              <div className="time-ms">50ms</div>
              <div className="time-ms">60ms</div>
              <div className="time-ms">70ms</div>
              <div className="time-ms">80ms</div>
              <div className="time-ms">90ms</div>
              <div className="time-ms">100ms</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}