import './App.css'
import Btn from "./Btn.jsx"
import {useState, useEffect, useRef} from "react";
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

function App() {
  const [dice, setDice] = useState(rollDice())
  const buttonRef = useRef(null);

  const gameWon = dice.every(dye => dye.isHeld) && 
                  dice.every(dye => dye.value === dice[0].value)
  useEffect(() => {
    if(gameWon) {
      buttonRef.current.focus()
    }
  }, [gameWon]  )
                  

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
    if(!gameWon) {
      setDice(oldDice => oldDice.map(dice => 
        dice.isHeld ? 
        dice : {...dice, value: Math.ceil(Math.random()*6 )}
      ));
    } else{setDice(rollDice())}

  }
  
  function hold(id) {
    setDice(oldDice => oldDice.map(
      dice => dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice))
  }
  const displayDice = dice.map((diceObj) => (
      <Btn 
        key={diceObj.id} 
        id={diceObj.id} 
        value={diceObj.value} 
        isHeld={diceObj.isHeld} 
        hold={() =>hold(diceObj.id)} 
      />)
   )
  return (  
    <> 
      {gameWon && (
        <Confetti 
          width={window.innerWidth} 
          height={window.innerHeight} 
        />
      )}
      <div aria-live='polite' className='sr-only'>
         {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
      </div>
      <h1 className='title'>Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
         Click each die to freeze it at its current value between rolls.</p>
      <main>
        {displayDice} 
        <button ref={buttonRef} className='main-roll' onClick={newRoll}>{gameWon ? "New game" : "Roll"}</button>               
      </main>   
    </>   
  )
}

export default App
