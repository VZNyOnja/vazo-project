import { MainHeader } from '../components/MainHeader';
import './MontagePage.css';

export function MontagePage() {
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
          <img className="video" src="/images/video-lyrics.png"></img>
          
          <div className="audio-controls">
            <img className="control-icon" src="/images/stop.png" alt="icône" />
            <img className="control-icon" src="/images/retour.png" alt="icône" />
            <img className="control-icon" src="/images/previous.png" alt="icône" />
            {/* <img className="control-icon play" src="/images/play.png" alt="icône" /> */}
            <img className="control-icon" src="/images/pause.png" alt="icône" />
            <img className="control-icon" src="/images/next.png" alt="icône" />
            <img className="control-icon" src="/images/continuer.png" alt="icône" />
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