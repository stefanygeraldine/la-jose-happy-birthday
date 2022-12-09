import './App.scss';
import Top from './assets/imagen-top.svg'
import birthday from './assets/birthday.svg'
import { StartLottiePlayer } from './components/Lotties/StarLottie';

function App() {
  return (
    <div className="container">
      <StartLottiePlayer />
      <img src={Top} alt="top" className="top"/>
      <img src={birthday} alt="top" className="birthday"/>
     <div className="container__center">
       <h4>Josefina Losada</h4>
       <p className="text">FRIEND | TEACHER | COMPAÑERA</p>
     </div>
      <button className="button">Click Here</button>
    </div>
  );
}

export default App;
