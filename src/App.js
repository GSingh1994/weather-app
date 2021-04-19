import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input: "",
      finalInput: "",
    };
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  handleSubmit(e) {
    this.setState((state) => ({
      finalInput: state.input,
    }));
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" />
        </form>
      </div>
    );
  }
}

export default App;

// api=fce51865df10c606b4200dd86db4fdd5
