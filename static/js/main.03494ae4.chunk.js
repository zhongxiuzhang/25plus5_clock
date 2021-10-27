(this.webpackJsonp25plus5_clock=this.webpackJsonp25plus5_clock||[]).push([[0],{13:function(t,e,s){},8:function(t,e,s){"use strict";s.r(e);var i=s(3),n=s(4),a=s(7),r=s(6),c=s(1),h=s.n(c),o=s(5),l=s.n(o),b=(s(13),s(0)),u=function(t){Object(a.a)(s,t);var e=Object(r.a)(s);function s(t){var n;return Object(i.a)(this,s),(n=e.call(this,t)).intervalID=0,n.state={breakLen:5,sessionLen:25,timeLeft:"25:00",currState:"Session",start:!0},n}return Object(n.a)(s,[{key:"setTime",value:function(){var t=this.state.timeLeft.split(":");if("00"==t[0]&&"00"==t[1])if(this.playAudio(),"Session"==this.state.currState){var e=this.state.breakLen<10?"0"+this.state.breakLen+":00":this.state.breakLen+":00";this.setState({currState:"Break",timeLeft:e})}else{var s=this.state.sessionLen<10?"0"+this.state.sessionLen+":00":this.state.sessionLen+":00";this.setState({currState:"Session",timeLeft:s})}if("00"!=t[0]&&"00"==t[1]){var i=parseInt(t[0])-1;i=i<10?"0"+i:i.toString(),this.setState({timeLeft:i+":59"})}if("00"!=t[1]){var n=parseInt(t[1])-1;n=n<10?"0"+n:n.toString(),this.setState({timeLeft:t[0]+":"+n})}}},{key:"setStartPause",value:function(){this.setState({start:!this.state.start}),this.state.start?this.timeCountRun():clearInterval(this.intervalID)}},{key:"timeCountRun",value:function(){var t=this;this.intervalID=setInterval((function(){return t.setTime()}),1e3)}},{key:"playAudio",value:function(){document.getElementById("beep").play()}},{key:"initialize",value:function(){clearInterval(this.intervalID);var t=document.getElementById("beep");t.pause(),t.currentTime=0,this.setState({breakLen:5,sessionLen:25,timeLeft:"25:00",currState:"Session",start:!0})}},{key:"handleLenClick",value:function(t){var e;switch(t){case"bd":this.state.breakLen>1&&(this.setState({breakLen:this.state.breakLen-1}),"Break"==this.state.currState&&(e=this.state.breakLen-1<10?"0"+(this.state.breakLen-1)+":00":this.state.breakLen-1+":00",this.setState({timeLeft:e})));break;case"bi":this.state.breakLen<60&&(this.setState({breakLen:this.state.breakLen+1}),"Break"==this.state.currState&&(e=this.state.breakLen+1<10?"0"+(this.state.breakLen+1)+":00":this.state.breakLen+1+":00",this.setState({timeLeft:e})));break;case"sd":this.state.sessionLen>1&&(this.setState({sessionLen:this.state.sessionLen-1}),"Session"==this.state.currState&&(e=this.state.sessionLen-1<10?"0"+(this.state.sessionLen-1)+":00":this.state.sessionLen-1+":00",this.setState({timeLeft:e})));break;case"si":this.state.sessionLen<60&&(this.setState({sessionLen:this.state.sessionLen+1}),"Session"==this.state.currState&&(e=this.state.sessionLen+1<10?"0"+(this.state.sessionLen+1)+":00":this.state.sessionLen+1+":00",this.setState({timeLeft:e})))}}},{key:"render",value:function(){var t=this;return Object(b.jsxs)("div",{id:"clock",children:[Object(b.jsx)("h1",{children:"25 + 5 Clock"}),Object(b.jsxs)("div",{id:"length-set",children:[Object(b.jsxs)("div",{id:"break-set",children:[Object(b.jsx)("p",{id:"break-label",children:"Break Length"}),Object(b.jsx)("button",{id:"break-decrement",onClick:function(){return t.handleLenClick("bd")},children:"\u2193"}),Object(b.jsx)("span",{id:"break-length",children:this.state.breakLen}),Object(b.jsx)("button",{id:"break-increment",onClick:function(){return t.handleLenClick("bi")},children:"\u2191"})]}),Object(b.jsxs)("div",{id:"session-set",children:[Object(b.jsx)("p",{id:"session-label",children:"Session Length"}),Object(b.jsx)("button",{id:"session-decrement",onClick:function(){return t.handleLenClick("sd")},children:"\u2193"}),Object(b.jsx)("span",{id:"session-length",children:this.state.sessionLen}),Object(b.jsx)("button",{id:"session-increment",onClick:function(){return t.handleLenClick("si")},children:"\u2191"})]})]}),Object(b.jsxs)("div",{id:"time-displayer",children:[Object(b.jsx)("p",{id:"timer-label",children:this.state.currState}),Object(b.jsx)("p",{id:"time-left",children:this.state.timeLeft})]}),Object(b.jsxs)("div",{id:"control-buttons",children:[Object(b.jsxs)("button",{id:"start_stop",onClick:function(){return t.setStartPause()},children:[Object(b.jsx)("i",{className:"fas fa-play"}),Object(b.jsx)("i",{className:"fas fa-pause"}),Object(b.jsx)("audio",{id:"beep",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]}),Object(b.jsx)("button",{id:"reset",onClick:function(){return t.initialize()},children:Object(b.jsx)("i",{className:"fas fa-sync-alt"})})]})]})}}]),s}(h.a.Component);l.a.render(Object(b.jsx)(u,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.03494ae4.chunk.js.map