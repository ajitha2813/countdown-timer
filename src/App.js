
import React from 'react';
import Countdown from './Component/Countdown';

const App =() => {
  return (
    <div>
      
      <Countdown initialTime={60} /> {/*one minutes*/}
    </div>
  );
}

export default App;
