import { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import {Info} from "./components/Info"

function App() {

  const [info, setInfo] = useState ([] );
  const [state, setState ] = useState(false) ;
  return (
    <div className="App">
      <Weather  setInfo = {setInfo}  setState={setState}/ >
        <Info info={info} state = {state}/>
    </div>
  );
}

export default App;
