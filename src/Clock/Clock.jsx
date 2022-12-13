import React, { Component } from 'react';
import './style.css';

class Clock extends Component {
  constructor(props){
    super();
    this.state = {
      name: 'Start',
      start : true ,
      second: props.second,
      percent: (1/props.second)*100,
      percentLoad:  (1/props.second)*100
    };
    this.start = props.second ;
    this.startTime = this.startTime.bind(this);
  }

  

  startTime() {
    console.log(window.location.pathname);
    if (this.state.name == 'Restart') {
      this.setState({name: 'Start' , start: true , second: this.start})
    }else {
      if (this.state.start) {
        this.second = setInterval(()=>this.countDown(),1000)
        this.setState({start: false , name: 'Stop'})
      }else {
        this.setState({start: true , name: 'Start'})
        clearInterval(this.second)
      }
    }
    
     
    
  }

  countDown() {
    let second = this.state.second-1 ; 
    let percentLoad = this.state.percent + this.state.percentLoad;
    this.setState({percentLoad})
    this.setState({second});
    document.documentElement.style.setProperty('--p',this.state.percentLoad);
    if (second == 0) {
      this.setState({name: 'Restart' , percentLoad: this.state.percent})
      clearInterval(this.second);
    }
  }


  render() {
    return (
      <div>
        <>
          <div className="clock">
            <div className="bottom-clock">
             <button onClick={this.startTime} >{this.state.name}</button> 
            </div>
            <div id='time' className="time" >
              <p>{this.state.second}</p>
            </div>
          </div>
        </>
      </div>
    );
  }
}

export default Clock;
