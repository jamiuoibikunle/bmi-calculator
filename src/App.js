import {useState, useRef} from 'react'
import './App.css';

function App() {

  const [ HeightValue, setHeightValue ] = useState(null)
  const [ WeightValue, setWeightValue ] = useState(null)

  return (

    <div className="App">
      <form>
        <div className='bmi'>
          BMI: { (WeightValue / Math.pow(HeightValue, 2)).toFixed(2) }
        </div>
        <input type='text' name='value' placeholder='Your weight in kilogrammes.' onChange={(e) => setWeightValue(Number(e.target.value))} />
        <input type='text' name='value' placeholder='Your height in metres.' onChange={(e) => setHeightValue(Number(e.target.value))} />
      </form>
    </div>
  );
}

export default App;