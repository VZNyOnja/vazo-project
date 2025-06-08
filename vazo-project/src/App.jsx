import './App.css'
import { Routes, Route } from 'react-router'
import { Homepage } from './pages/Homepage';
import { TeleverserPage } from './pages/TeleverserPage';
import { MontagePage } from './pages/MontagePage';

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="televerser-page" element={<TeleverserPage />} />
      <Route path="montage-page" element={<MontagePage />} />
    </Routes>
  )
}

export default App
