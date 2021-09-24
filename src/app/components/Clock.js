import React from 'react'
class Clock extends React.Component {

    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    } 
  
    componentDidMount() {
      //手動加入timerID
      this.timerID = setInterval(
        () => this.tick(), 1000);
      }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    render() {
      return (
        <div>
          <h1 className="text-center">LocaleTime： {this.state.date.toLocaleTimeString()}</h1>
        </div>
      );
    }


  }
export default React.memo(Clock)