import './App.scss';
import Top from './assets/imagen-top.svg'
import birthday from './assets/birthday-full.svg'
import left from './assets/florBubleLeft.svg'
import right from './assets/florBubleRight.svg'
import birthday from './assets/birthday.svg'

function App() {
  return (
    <div className="container">
      <StartLottiePlayer />
      <img src={Top} alt="top" className="top"/>
      <img src={birthday} alt="top" className="birthday"/>
      <img src={left} alt="left" className="left"/>
      <img src={right} alt="right" className="right"/>
     <div className="container__center">
       <h4 className="jose">Josefina Lozada</h4>
       <p className="text">FRIEND | TEACHER | COMPAÑERA</p>
       <button className="button">Click Here</button>
     </div>

    </div>
  );
}

export default App;
