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
        isHeld: true,
        id: nanoid()
      })
    }
    return arr;
  }
  console.log(rollDice())
  const displayDice = dice.map((diceObj) => (
      <Btn key={diceObj.id} value={diceObj.value} isHeld={diceObj.isHeld} />)
   )
  return (
    
      <main>
        {displayDice} 
        <button className='main-roll' onClick={()=>setDice(rollDice())}>Roll</button>               
      </main>     
       
    

  )
}

export default App
