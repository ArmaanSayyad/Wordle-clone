import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
    const {gameOver, setGameOver, correctWord, currAttempt} = useContext(AppContext)
  return (
    <div className='gameOver'>
        <h3>{gameOver.guessedWord ? "You Guessed the Word!" : "You Failed"}</h3>
        <h1>Corret: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver