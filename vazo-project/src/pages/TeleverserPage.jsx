import { MainHeader } from '../components/MainHeader';
import './TeleverserPage.css';

// La page téléverser
export function TeleverserPage() {
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
            <div className="action-televerser">
              <span className="choose-file">Choisir un fichier</span> ou faites-les glissez ici
            </div>
          </div>
        </div>
      </div>
    </>
  );
}