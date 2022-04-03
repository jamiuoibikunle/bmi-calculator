import {useState, useRef} from 'react'
import './App.css';

function App() {

  const [ WeightValue, setWeightValue ] = useState(null)
  const [ BMI, setBMI ] = useState(null)

  return (

    <div className="App">
      <form>
        <div className='bmi'>
          Your BMI: {BMI}
        </div>
        <input type='text' name='value'
          placeholder='Your weight in kilogrammes.'
          onChange={(e) => setWeightValue(Number(e.target.value))} />
        <input type='text' name='value'
          placeholder='Your height in metres.'
          onChange={(e) => setBMI((WeightValue / Math.pow(Number(e.target.value), 2)).toFixed(2))} />
      </form>
    </div>
  )
}

export default App;