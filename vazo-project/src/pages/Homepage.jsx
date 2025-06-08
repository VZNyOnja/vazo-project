import { HomepageHeader } from "../components/HomepageHeader";
import './Homepage.css';

export function Homepage() {
  return (
    <>
      <title>Home Page</title>

      <HomepageHeader />

      <div className="homepage-body">
        <div className="homepage-container">
          <div className="introducing">
            <div className="app-info">
              <h2 className="welcome">Bienvenue sur Vazo</h2>
              <p className="about-app">Une plateforme où vous pouvez convertir vos audios en vidéos lyrics captivantes</p>
            </div>

            <img className="welcoming-image" src="/images/human-listen-to-music.png" alt="image d'un gars en train d'écouter une chanson" />
          </div>

            <button className="commencer-button">Commencer</button>
        </div>
      </div>
    </>
  );
}