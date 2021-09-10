import './App.css';
import React, { useState } from 'react';

function App() {
  var [billAmountValue, setBillAmountValue] = useState(0);
  var [cashGivenValue, setCashGivenValue] = useState(0);
  var [message, setMessage] = useState("");
  var notes = [2000,500,100,20,10,5,1];
  function billAmountHandler(event) {
    billAmountValue = event.target.value;
    setBillAmountValue(billAmountValue);
  }

  function cashGivenHandler(event) {
    cashGivenValue = event.target.value;
    setCashGivenValue(cashGivenValue);
  }
  function calculateChangeAmount(billAmountValue,cashGivenValue){
     var amountDifference = cashGivenValue-billAmountValue;
     for(var i=0; i<notes.length; i++){
       var notesCount= Math.trunc(amountDifference/notes[i]);
       amountDifference=amountDifference % notes[i];
     }
  }
  function onClickHandler() {
    if(billAmountValue===cashGivenValue){
      message="No amount to return";
      setMessage(message);
    }
    else if(billAmountValue > 0) {
      if (cashGivenValue > billAmountValue) {
         calculateChangeAmount(billAmountValue,cashGivenValue);
      } else {
        message = "Go and get some money!";
        setMessage(message);
      }
    } else {
      message = "Bill amount should be greater than 0";
      setMessage(message);
    }
  }
  return (
    <div className="App">
      <h1 className="heading">Cash Register Manager</h1>
      <p className="description">Enter the bill amount and cash given by the customer and know minimum number of notes to return.</p>
      <label htmlFor="billAmount">Bill Amount:</label>
      <input onChange={billAmountHandler} type="text" className="billAmount" />
      <label htmlFor="cashGiven">Cash Given:</label>
      <input onChange={cashGivenHandler} type="text" className="cashGiven" />
      <button onClick={onClickHandler} className="checkButton">Check</button>
      <div className="message">{message}</div>
      <table>
        <caption className="tableCaption">Return Change</caption>
        <tr>
          <th>Number of Notes</th>
          <th id="note2000"></th>
          <th id="note500"></th>
          <th id="note100"></th>
          <th id="note20"></th>
          <th id="note10"></th>
          <th id="note5"></th>
          <th id="note1"></th>
        </tr>
        <tr>
          <th>Notes</th>
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
