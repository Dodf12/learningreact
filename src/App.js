import './App.css';
import image1 from "/Users/deepikadasari/Documents/Abhi/learning-new-technologies/learningreact/src/logo.png"
import { useState } from 'react';


function App() {
  const [headerColor, setHeaderColor] = useState('blue');
  const changeColor = () => (
    setHeaderColor(headerColor === 'blue' ? 'orange' : 'blue')

  );
  return (
    <div className = "container">
      <header className = "header">
        <h1>Reggae</h1>
      </header>
      <div className = "content">
        <img src = {image1} alt="bombaclot" className = "image"></img>
        <ul className="bullet-points"> 
          <li>First bullet point</li>
          <li>Second Bullet point</li>
          <li>Third Bullet point</li>
        </ul>
      </div>
      <div>
        <h1 style={{color : headerColor}}> Hello World</h1>
        <button onClick={changeColor}>Change Color</button>
      </div>

    </div>
  );
}

export default App;
