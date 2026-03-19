import './App.css'
import Btn from "./Btn.jsx"
import {useState} from "react";
import { nanoid } from "nanoid"

function App() {
  const [dice, setDice] = useState(rollDice())

  function rollDice (){
    const arr = [];
    for(let i=0; i<10; i++) {
      const rand = Math.ceil(Math.random()*6 ) 
      arr.push({
        value: rand,
        isHeld: false,
        id: nanoid()
      })
    }
    return arr;
  }

  function newRoll() {
    setDice(oldDice => oldDice.map(dice => 
      dice.isHeld ? 
      dice : {...dice, value: Math.ceil(Math.random()*6 )}));
  }
  
  function hold(id) {
    setDice(oldDice => oldDice.map(
      dice => dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice))
  }
  const displayDice = dice.map((diceObj) => (
      <Btn key={diceObj.id} id={diceObj.id} value={diceObj.value} isHeld={diceObj.isHeld} hold={() =>hold(diceObj.id)} />)
   )
  return (  
    <> 
      <h1 className='title'>Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
         Click each die to freeze it at its current value between rolls.</p>
      <main>
        {displayDice} 
        <button className='main-roll' onClick={newRoll}>Roll</button>               
      </main>   
    </>   
  )
}

export default App
