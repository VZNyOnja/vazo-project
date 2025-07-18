import { Routes, Route } from 'react-router'
import { Homepage } from './pages/Homepage';
import { TeleverserPage } from './pages/TeleverserPage';
import { MontagePage } from './pages/MontagePage';
import { PageAccueil } from './pages/PageAccueil';
import { MyMusics } from './pages/MyMusics';
import Montage2 from './pages/Montage2';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="televerser-page" element={<TeleverserPage />} />
      <Route path="montage-page" element={<MontagePage />} />
      <Route path="accueil" element={<PageAccueil />} />
      <Route path="my-musics" element={<MyMusics />} />
      <Route path="montage" element={<Montage2 />} />
    </Routes>
  )
}

export default App
