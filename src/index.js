import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{
    intervalID = 0;
    
    constructor(props){
      super(props);  
      this.state={
        breakLen: 5,
        sessionLen: 25,
        timeLeft: '25:00',
        currState: 'Session',
        start:true
      };
    }
    
    setTime(){
      let arr = this.state.timeLeft.split(":");
      if(arr[0] == '00' && arr[1] == '00') {
        this.playAudio();
        if(this.state.currState == 'Session'){
          let newTimeLeft = this.state.breakLen<10? '0'+this.state.breakLen+':00':this.state.breakLen+':00';
          this.setState({currState:"Break", timeLeft: newTimeLeft});
        }else{
          let newTimeLeft = this.state.sessionLen<10? '0'+this.state.sessionLen+':00':this.state.sessionLen+':00';
          this.setState({currState:"Session", timeLeft: newTimeLeft});
        }
      }
      if(arr[0] != '00' && arr[1] == '00') {
        let newMin = parseInt(arr[0]) - 1;
        newMin = newMin<10? '0'+newMin: newMin.toString();
        this.setState({timeLeft: newMin+':59'});
      }
      if(arr[1] != '00') {
        let newSec = parseInt(arr[1]) - 1;
        newSec = newSec<10? '0'+newSec: newSec.toString();
        this.setState({timeLeft: arr[0]+':'+newSec});
      }
    }
    
    setStartPause(){
      this.setState({start: !this.state.start});
      if(this.state.start) {
        this.timeCountRun();
      }else{
        clearInterval(this.intervalID);
      }
    }
    
    timeCountRun(){
      this.intervalID = setInterval(()=>this.setTime(), 1000);
    }
    
    playAudio(){
      var aud = document.getElementById("beep");
      aud.play();
    }
    
    initialize(){
      clearInterval(this.intervalID);
      var aud = document.getElementById("beep");
      aud.pause(); 
      aud.currentTime = 0;
      this.setState({
        breakLen: 5,
        sessionLen: 25,
        timeLeft: '25:00',
        currState: 'Session',
        start:true
      });
    }
    
    handleLenClick(str){
      let newTimeLeft;
      switch(str){
        case "bd": 
          if(this.state.breakLen>1) {
            this.setState({breakLen: this.state.breakLen-1});
            if(this.state.currState == 'Break'){
              newTimeLeft = (this.state.breakLen-1<10)? '0'+(this.state.breakLen-1)+':00':(this.state.breakLen-1)+':00';
              this.setState({timeLeft:newTimeLeft});
            }
          }
          break;
        case "bi": 
          if(this.state.breakLen<60) {
            this.setState({breakLen: this.state.breakLen+1});
            if(this.state.currState == 'Break'){
              newTimeLeft = (this.state.breakLen+1<10)? '0'+(this.state.breakLen+1)+':00':(this.state.breakLen+1)+':00';
              this.setState({timeLeft:newTimeLeft});
            }
          }
          break;
        case "sd": 
          if(this.state.sessionLen>1) {
            this.setState({sessionLen: this.state.sessionLen-1});
            if(this.state.currState == 'Session'){
              newTimeLeft = (this.state.sessionLen-1<10)? '0'+(this.state.sessionLen-1)+':00':(this.state.sessionLen-1)+':00';
              this.setState({timeLeft:newTimeLeft});
            }
          }
          break;
        case "si": 
          if(this.state.sessionLen<60) {
            this.setState({sessionLen: this.state.sessionLen+1});
            if(this.state.currState == 'Session'){
              newTimeLeft = (this.state.sessionLen+1<10)? '0'+(this.state.sessionLen+1)+':00':(this.state.sessionLen+1)+':00';
              this.setState({timeLeft:newTimeLeft});
            }
          }
          break;
      }
        
    }
    
    render(){
      return(
        <div id="clock">
          <h1>25 + 5 Clock</h1>
          <div id="length-set">
            <div id="break-set"><p id="break-label">Break Length</p>
              <button id="break-decrement" onClick={()=>this.handleLenClick("bd")}>&#8595;</button><span id="break-length">{this.state.breakLen}</span><button id="break-increment" onClick={()=>this.handleLenClick("bi")}>&#8593;</button>
            </div>
            <div id = "session-set"><p id="session-label">Session Length</p>
              <button id="session-decrement" onClick={()=>this.handleLenClick("sd")}>&#8595;</button><span id="session-length">{this.state.sessionLen}</span><button id="session-increment" onClick={()=>this.handleLenClick("si")}>&#8593;</button>
            </div>
          </div>
          <div id="time-displayer">
            <p id="timer-label">{this.state.currState}</p>
            <p id="time-left">{this.state.timeLeft}</p>
          </div>
          <div id="control-buttons">
            <button id="start_stop" onClick={()=>this.setStartPause()}><i className="fas fa-play"></i><i className="fas fa-pause"></i><audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio></button>
            <button id="reset" onClick={()=>this.initialize()}><i className="fas fa-sync-alt"></i></button>
          </div>        
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );