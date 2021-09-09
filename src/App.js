import './App.css';
import React,{useState} from 'react';

function App() {
  var [billAmountValue,setBillAmountValue]=useState(0);
  function billAmountHandler(event){
    billAmountValue = event.target.value;
    setBillAmountValue(billAmountValue);
  }
  function cashGivenHandler(event){
    var cashGivenValue = event.target.value;
    return cashGivenValue;
  }
  function onClickHandler(){
    billAmountHandler();
    cashGivenHandler();
    if(billAmountValue > 0){

    }else{

    }
  }
  return (
    <div className="App">
      <h1 className="heading">Cash Register Manager</h1>
      <p className="description">Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <label htmlFor="billAmount">Bill Amount:</label>
      <input onChange={billAmountHandler} type="text" className="billAmount"/>
      <label htmlFor="cashGiven">Cash Given:</label>
      <input onChange={cashGivenHandler} type="text" className="cashGiven" />
      <button onClick={onClickHandler} className="checkButton">Check</button>
      <div className="message"></div>
      <table>
        <caption className="tableCaption">Return Change</caption>
        <tr>
         
        </tr>
        <tr>
          <th>Note</th>
          <th>2000</th>
          <th>500</th>
          <th>100</th>
          <th>20</th>
          <th>10</th>
          <th>5</th>
          <th>1</th>
        </tr>
      </table>
    </div>
  );
}

export default App;
