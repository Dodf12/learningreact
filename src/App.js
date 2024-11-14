import './App.css';
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
