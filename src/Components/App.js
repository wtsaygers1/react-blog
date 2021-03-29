import React from "react";
import "../App.css";
import Splash from "./Splash";
import About from "./About";


class App extends React.Component {
  constructor() {
    super()
    // what is the state?? in current format there are two states
    // the splash page and about me page
    // should this.state be an array then???
    this.state = {
      currentPage: true
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  // I want this clickHandler to change state from the splash page to the
  // about me page
  clickHandler() {
    console.log("working", this);
    this.setState({ currentPage: !this.state.currentPage })
  }

  render() {
    return(
     this.state.currentPage ? <Splash click={this.clickHandler} /> : <About />    
     );
  }
}

export default App;
