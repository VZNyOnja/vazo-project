import './App.css'
import { Routes, Route } from 'react-router'
import { Homepage } from './pages/Homepage';
import { TeleverserPage } from './pages/TeleverserPage';

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="televerser-page" element={<TeleverserPage />} />
    </Routes>
  )
}

export default App
