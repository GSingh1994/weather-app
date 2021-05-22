import React, { Component } from "react";
import Weather from "./components/Weather";
import "./styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      city: "",
      data: [],
    };
  }
  handleChange(e) {
    this.setState({
      city: e.target.value,
    });
  }
  componentDidMount() {
    this.fetchData("winnipeg");
  }
  handleSubmit(e) {
    const { city } = this.state;
    this.fetchData(city);
    e.preventDefault();
  }

  fetchData(city) {
    const apiKey = "fce51865df10c606b4200dd86db4fdd5";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          city: "",
        });
      })
      .catch((err) => console.log(err));
    console.log("API called");
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter city"
            autoFocus
          />
        </form>
        {data.length <= 1 ? console.log("Loading") : <Weather data={data} />}
      </div>
    );
  }
}

export default App;
