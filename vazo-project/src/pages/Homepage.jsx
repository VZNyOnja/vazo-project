import { HomepageHeader } from "../components/HomepageHeader";
import './Homepage.css';
import ImageSlider from "./ImageSlider";

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
              <p className="about-app">Une plateforme où vous pouvez convertir vos audios en vidéos lyrics captivantes et écouter vos musiques.</p>
            </div>
            <ImageSlider />
          </div>

            <button className="commencer-button">Commencer</button>
        </div>
      </div>
    </>
  );
}