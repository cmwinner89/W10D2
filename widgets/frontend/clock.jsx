import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <p>
            <span>Time:</span>
            <span>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()} EDT</span>
          </p>
          <p>
            <span>Date:</span> 
            <span>{weekdays[this.state.time.getDay() - 1]} {months[this.state.time.getMonth()]} {this.state.time.getDate()} {this.state.time.getUTCFullYear()}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Clock;