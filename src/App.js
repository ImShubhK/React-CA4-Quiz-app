import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  const[score,setScore] = useState(0);
  const[current,setCurrent] = useState(0);
  const[showresult,setResults] = useState(0);
  const[bg,setBg] = useState(true)
  const[colour,setColour] =useState("dark")

  const selected = (isCorrect) =>{
    if(isCorrect){
      setScore(score+1);
    }
    if(current+1<questions.length){
      setCurrent(current+1);
    }
    else{
      setResults(true);
    }
  }
   const changecolour = ()=>{
    setBg(bg?false:true)
   }
   function changeBg(color){
    document.body.style.backgroundColor = color? "yellow" : "white";
   return {
         backgroundColor : color? "white" : "yellow"
    }

   }
   function textColor(color){
   return {
        color: color?"white" : "yellow",
    }
   }
   useEffect(() =>{
   setColour(colour==="light"?"dark":"light")
   },[bg])
  return (
    <div className="App" style={changeBg(bg)}>
     <div className="main">
      <h2 style={textColor(colour)}>Quiz App</h2>
      <button className="changeColor" onClick={changecolour}>{colour}</button>
     </div>
     {
      showresult ?<Result
      setScore={setScore} score ={score}
      setCurrent={setCurrent}
      setResults={setResults} length ={questions.length} />
      :<QuestionBox questions = {questions}
      selected = {selected}
      current={current}/>
     }
    </div>
  );
}

export default App;