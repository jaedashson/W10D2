import React from 'react'; 

class Clock extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      time: new Date(),
    };
  };
  
  tick() {
    this.setState({ time: new Date() });
  };
  
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = 0;
  };

  render() {
    const hours = this.state.time.getHours();
    const minutes = this.state.time.getMinutes();
    const seconds = this.state.time.getSeconds(); 
    const date = this.state.time.toDateString(); 
    
    return(
      <>
        <h1>Clock</h1>
        <div>
          <div>
            <span>Time:</span>
            <span>{hours}:{minutes}:{seconds}</span>
          </div>
          <div>
            <span>Date:</span>
            <span>{date}</span>
          </div>
        </div>
      </>
    )
  };
};

export default Clock;