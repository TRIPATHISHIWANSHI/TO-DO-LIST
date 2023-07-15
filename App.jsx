import React, { useState } from "react";
import "./App.css";
const App=()=>{
  const[inputList,setInputList]=useState();
  const[Items,setItems]=useState([]);//we make an array for storing the items written in todolist
  const itemEvents=(event)=>{
    setInputList(event.target.value);//by this whenever writes anything in the text box it will be appear in the setInputList and the inputList value will update
  }
 
  const listOfitems=(event)=>{
    setItems((oldItems)=>{
      return[...oldItems,inputList]
    });
  }
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>TODO LIST</h1>
        <br/>
        <input type="text" placeholder="Add a Items" onChange={itemEvents}/>
        <button onClick={listOfitems}>+</button>
        <ol>
          
          {Items.map((itemval,index)=>{
            return <li key={index}>{itemval}</li>;
          })}
        </ol>
      </div>
    </div>
    </>
  );
};
export default App;
