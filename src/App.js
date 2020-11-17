import './App.css';
import React from "react";

function App() {
  var msid,sid,mid,hid;

  const fstart = () =>{
    let start = document.querySelector('.start');
    if(start.textContent === 'START'){
        start.textContent = 'STOP';
    
        msid = setInterval(fms,1);
        sid = setInterval(fs,1000);
        mid = setInterval(fm,60000);
        hid = setInterval(fh,3600000);
    }
    else{
        start.textContent = 'START';
        clearInterval(msid);
        clearInterval(sid);
        clearInterval(mid);
        clearInterval(hid);
    }
  }
  
  const fms = () => {
    let mseconds = document.querySelector('.mseconds');
    if(mseconds.textContent === '99'){
        mseconds.textContent = '0';
    }
    else
        mseconds.textContent = Number(mseconds.textContent) + 1 ;
  }
  
  const fs = () => {
    let seconds = document.querySelector('.seconds');
    if(seconds.textContent === '59'){
        seconds.textContent = '0';
    }
    else{
        seconds.textContent = Number(seconds.textContent) + 1;
    }
  }
  
  const fm = () => {
    let minutes = document.querySelector('.minutes');
    document.querySelector('.mins').style.display = 'flex';
    if(minutes.textContent === "")
        minutes.textContent = '1';
    else if(minutes.textContent === 59){
        minutes.textContent = '0';
    }
    else
        minutes.textContent = Number(minutes.textContent) + 1;
  }

  const fh = () => {
    let hours = document.querySelector('.hours');
    document.querySelector('.hrs').style.display = 'flex';
    if(hours.textContent === "")
        hours.textContent = '1';
    else
        hours.textContent = Number(hours.textContent) + 1;
  }
  const freset = () => {
    clearInterval(msid);
    clearInterval(sid);
    clearInterval(mid);
    clearInterval(hid);
    document.querySelector('.mseconds').textContent = 0;
    document.querySelector('.seconds').textContent = 0;
    document.querySelector('.minutes').textContent = "";
    document.querySelector('.hours').textContent = "";
  
    document.querySelector('.start').textContent = 'START';
    document.querySelector('.mins').style.display = 'none';
    document.querySelector('.hrs').style.display = 'none';
  }

  return (
    <div className="container">
        <div className="time">
            <div className="digit hrs">
                <div className="hours t"></div> <div className="unit h">h</div>
            </div>
            <div className="digit mins">
                <div className="minutes t"></div> <div className="unit m">m</div>
            </div>
            <div className="digit sds">
                <div className="seconds t">0</div> <div className="unit">s</div>
            </div>
            <div className="mseconds t">0</div>
        </div>
        <div className="buttons">
            <button className="start" onClick = {fstart}>START</button>
            <button className="reset" onClick = {freset}>RESET</button>
        </div>
    </div>
  );
} 
export default App;