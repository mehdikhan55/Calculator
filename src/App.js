
import './App.css';
import Body from './components/Body/Body'
import Display from './components/Display/Display'
import Buttons from './components/Buttons/Buttons'
import React,{useRef,useState} from 'react'

function App() {
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
  
  //Functioning 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value='';
  }; 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult(0);
  }; 


  return (
    <>
      <Body>    
        <Display resetInput={resetInput} resetResult={resetResult} setResult={setResult} result={result} inputRef={inputRef} resultRef={resultRef}/>
        <Buttons plus={plus}/>
      </Body>
    </>
  );
}

export default App;
