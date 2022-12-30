import React from 'react'
import { useRef } from 'react'
export default function QuestionBox({questions,selected,current}) {

    const focusQuizz = useRef();
    const focusOn = () =>{
      focusQuizz.current.style.color = "red";
    }
    const focusOff =() =>{
      focusQuizz.current.style.color = "blue";
    }
  return (
    <div className="card">
      <h2>
        Question: {current+1} out of {questions.length}
      </h2>
      <h3 ref={focusQuizz} className = "text">{questions[current].text}</h3>
         <ul className='list'>
          {questions[current].options.map((e) =>{
            return(
              <li
                key = {e.id}
                onClick = {()=>
           selected(e.isCorrect)}
               className ="listc" >{e.text }
              </li>
            );
          })}
         </ul>
         <button onClick={focusOn}>Higlights</button>
         <button onClick={focusOff}>Remove Highlights</button>
         
    </div>
  )
}
