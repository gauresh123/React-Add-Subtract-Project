import React from 'react';
import './App.css';


function App() {
  const Abc = ()=>{
    let a = document.getElementById("inpu").value;
    let b = document.getElementById("sp").innerText;
    let c = parseInt(b);
    let d = parseInt(a);
    let total =  c+d;
    document.getElementById("sp1").innerHTML=total; 
  }
const xyz = ()=>{
  let a = document.getElementById("inpu").value;
  let b = document.getElementById("sp").innerText;
  let c = parseInt(b);
  let d = parseInt(a);
  let total =  d-c;
  console.log(total);
  document.getElementById("sp1").innerHTML=total;
}

  return (
     <main>
      <input type="text" id="inpu" placeholder = "Please Enter Value" /> &nbsp; &nbsp; &nbsp;<br/><br/>
            <button id="btn1" onClick = {Abc} style={{
       backgroundColor:"blue",color:"white"
            }}>ADD</button> <br/>
       <button id="btn2" onClick={xyz} style={{
       backgroundColor:"red",color:"white"
            }}>SUBTRACT</button>

       <h4>Result: <span id="sp1">0</span></h4>
             <h4>Initial Value: <span id="sp" >20</span></h4>
       
     </main>
  
     
  );
}

export default App;