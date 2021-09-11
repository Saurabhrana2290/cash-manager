import './App.css';
import React, { useState } from 'react';

function App() {
  var [billAmountValue, setBillAmountValue] = useState(0);
  var [cashGivenValue, setCashGivenValue] = useState(0);
  var [message, setMessage] = useState("");
  var notes = [2000,500,100,20,10,5,1];
  var numberOfNotes=[];
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
       numberOfNotes.push(notesCount);
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
        <tbody>
        <tr>
          <th>Number of Notes</th>
          {
            numberOfNotes.map(function(item){
              return(
                console.log(item)
                
              )
            })
          }
        </tr>
        <tr>
          <th>Notes</th>
          <td>2000</td>
          <td>500</td>
          <td>100</td>
          <td>20</td>
          <td>10</td>
          <td>5</td>
          <td>1</td>
        </tr>
        </tbody>
        
      </table>
    </div>
  );
}

export default App;
