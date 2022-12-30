import React from 'react'
import questions from '../questions';
export default function Result({setScore,score,setCurrent,setResults,length}) {
  const playAgain = () =>{
    setScore(0)
    setResults(false);
    setCurrent(0)

  };
  return (
    <div className='Result'>
      <h1>Final Results</h1>
      <h2>{score} out of {length} correct -(
     {(score/length)*100}%)</h2>
     <button onClick={()=>playAgain()}>Play Again</button>
    </div>
  )
}
