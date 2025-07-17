import { useState, useRef } from 'react';
import { AccueilHeader } from "../components/AccueilHeader";
import './MyMusics.css';

export function MyMusics() {
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicCurrentTime, setMusicCurrentTime] = useState('00:00');
  const [musicTotalLength, setMusicTotalLength] = useState('--:--');
  const currentAudio = useRef();

  const handleMusicProgress = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  }

  const handleAudioUpdate = () => {
    // Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    setMusicTotalLength(musicTotalLength0);

    // Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin}:${currentSec < 10 ? `0${currentSec}` : currentSec}`;

    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress) ? 0 : progress);
  }

  return (
    <>
      <title>Page d&apos;accueil</title>

      <AccueilHeader />

      {/* Sidebar de l'accueil */}
      <div className="sidebar-accueil">
        <div className="menu-sidebar">
          <div className="profile-container">
            <img className="profile-image" src="/images/steeven.jpg" alt="Profil de l'utilisateur" />
            <p className="profile-name">Steeven Zengu</p>
          </div>
          <div className="composant-menu">
            <div className="composant">
              <img className="logo-composant" src="/images/accueil.png" alt="Image d'accueil" />
              <p className="nom-composant">Accueil</p>
            </div>

            <div className="composant">
              <img className="logo-composant" src="/images/projet.png" alt="Image d'un dossier" />
              <p className="nom-composant">Projet</p>
            </div>

            <div className="composant">
              <img className="logo-composant" src="/images/son-onde.png" alt="Image d'un son d'onde" />
              <p className="nom-composant">My Musics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Les Cover des musiques */}
      <div className="music-cover">
        
      </div>

      {/* Listes des musiques */}
      <div className="playlist">
        <div className="playlist-container">
          <p className="playlist-name">Playlist</p>
          <div className="music-list">
            <div className="music">
              <div className="info-music">
                <img src="/images/play-playlist.png" alt="Bouton play ou pause" className="play-button pause-button" />
                <img src="/audio/antsa.jpg" alt="" className="cover-music" />
                <div className="the-music">
                  <div className="title-music">IZY</div>
                  <div className="singer-music">Henika</div>
                </div>
              </div>
              <div className="manage-music">
                <p className="duration">2:57</p>
                <img src="/images/menu.png" alt="Icône de menu" className="menu" />
              </div>
            </div>
            <div className="music">
              <div className="info-music">
                <img src="/images/play-playlist.png" alt="Bouton play ou pause" className="play-button pause-button" />
                <img src="/audio/antsa.jpg" alt="" className="cover-music" />
                <div className="the-music">
                  <div className="title-music">IZY</div>
                  <div className="singer-music">Henika</div>
                </div>
              </div>
              <div className="manage-music">
                <p className="duration">2:57</p>
                <img src="/images/menu.png" alt="Icône de menu" className="menu" />
              </div>
            </div>
            <div className="music">
              <div className="info-music">
                <img src="/images/play-playlist.png" alt="Bouton play ou pause" className="play-button pause-button" />
                <img src="/audio/antsa.jpg" alt="" className="cover-music" />
                <div className="the-music">
                  <div className="title-music">IZY</div>
                  <div className="singer-music">Henika</div>
                </div>
              </div>
              <div className="manage-music">
                <p className="duration">2:57</p>
                <img src="/images/menu.png" alt="Icône de menu" className="menu" />
              </div>
            </div>
            <div className="music">
              <div className="info-music">
                <img src="/images/play-playlist.png" alt="Bouton play ou pause" className="play-button pause-button" />
                <img src="/audio/antsa.jpg" alt="" className="cover-music" />
                <div className="the-music">
                  <div className="title-music">IZY</div>
                  <div className="singer-music">Henika</div>
                </div>
              </div>
              <div className="manage-music">
                <p className="duration">2:57</p>
                <img src="/images/menu.png" alt="Icône de menu" className="menu" />
              </div>
            </div>
            <div className="music">
              <div className="info-music">
                <img src="/images/play-playlist.png" alt="Bouton play ou pause" className="play-button pause-button" />
                <img src="/audio/antsa.jpg" alt="" className="cover-music" />
                <div className="the-music">
                  <div className="title-music">IZY</div>
                  <div className="singer-music">Henika</div>
                </div>
              </div>
              <div className="manage-music">
                <p className="duration">2:57</p>
                <img src="/images/menu.png" alt="Icône de menu" className="menu" />
              </div>
            </div>
            <div className="music">
              <div className="info-music">
                <img src="/images/play-playlist.png" alt="Bouton play ou pause" className="play-button pause-button" />
                <img src="/audio/antsa.jpg" alt="" className="cover-music" />
                <div className="the-music">
                  <div className="title-music">IZY</div>
                  <div className="singer-music">Henika</div>
                </div>
              </div>
              <div className="manage-music">
                <p className="duration">2:57</p>
                <img src="/images/menu.png" alt="Icône de menu" className="menu" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu du lecteur */}
      {/* <div className="my-music-container"> */}
      <div className="music-player-container">
        <audio src="/audio/IZY_Henika.mp3"
          ref={currentAudio}
          onTimeUpdate={handleAudioUpdate}
        >
        </audio>
        <div className="music-player-details">
          <div className="music-info">
            <div className="music-player">Music Player</div>
            <div className="music-title">IZY</div>
            <div className="singer">Henika</div>
          </div>
          <img src="/audio/antsa.jpg" alt="Song's image" className="music-image" />
        </div>

        <div className="music-player-controller">
          <div className="duration-music">
            <div className="current-time">{musicCurrentTime}</div>
            <div className="end-time">{musicTotalLength}</div>
          </div>
          <input type="range" name="music-bar" className="music-bar" value={audioProgress} onChange={handleMusicProgress} />
          <div className="controls">
            <img src="/images/previous-lecteur.png" alt="previous" className="previous" />
            <img src={isAudioPlaying ? "/images/pause-lecteur.png" : "/images/play-lecteur.png"} alt="play or pause" className="play pause" onClick={handleAudioPlay} />
            <img src="/images/next-lecteur.png" alt="next" className="next" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}