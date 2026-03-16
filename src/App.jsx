import './App.css'
import Btn from "./Btn.jsx"
import {useState} from "react";

function App() {
  const [dice, setDice] = useState(rollDice())

  function rollDice (){
    const arr = [];
    for(let i=0; i<10; i++) {
      const rand = Math.ceil(Math.random()*6 ) 
      arr.push(rand)
    }
    return arr;
  }
  const displayDice = dice.map((i) => <Btn value={i} />)
  return (
    <main>
       {displayDice}
    </main>
  )
}

export default App
