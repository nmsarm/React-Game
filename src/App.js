import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './Pages/HomeScreen';
import MainGame from './Pages/MainGame';
import Mechanics from './Pages/Mechanics';
// import GameOver from './Pages/GameOver';
// import Congratulations from './Pages/Congratulations'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/main-game" element={<MainGame />} />
          <Route path="/how-to-play" element={<Mechanics />} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
