import React, { Component } from "react";
import Weather from "./components/Weather";
import "./styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      input: "",
      city: "",
    };
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
  handleSubmit(e) {
    this.setState((state) => ({
      city: state.input,
    }));

    e.preventDefault();
  }
  render() {
    const { city } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter city"
          />
        </form>

        <Weather city={city} />
      </div>
    );
  }
}

export default App;
