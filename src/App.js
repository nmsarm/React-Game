import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeScreen from './Pages/HomeScreen';
/* import MainGame from './Pages/MainGame';
import GameOver from './Pages/GameOver';
import Congratulations from './Pages/Congratulations'; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeScreen />
        
      </header>
    </div>
  );
}

export default App;
