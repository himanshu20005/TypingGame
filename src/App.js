import { useState } from 'react';
import GameScreen from './pages/GameScreen';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [prevTime, setPrevTime] = useState(0)
  return (
    <div>
      <GameScreen seconds={seconds} setSeconds={setSeconds} miliSeconds={miliSeconds} setMiliSeconds={setMiliSeconds} prevTime={prevTime} setPrevTime={setPrevTime} />
    </div>
  );
}

export default App;
