import "../styles/weather-icons.min.css";
const apiKey = "fce51865df10c606b4200dd86db4fdd5";

const Weather = ({ city }) => {
  city ? callApi() : console.log("no props");
  async function callApi() {
    try {
      let response = await fetch();
      // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      const data = await response.json();
      return getInfo(data);
    } catch (err) {
      console.log(err);
    }
  }
  const getInfo = (data) => {
    console.log(data);
  };
  return (
    <div className="Weather">
      <div className="flag">
        <img src="https://www.countryflags.io/in/flat/32.png"></img>
      </div>
      <div className="icon-bg">
        <i className="wi wi-night-sleet"></i>
      </div>
      <div className="about">rainy</div>

      <div className="aside">
        <div className="wind flex">
          <i className="wi wi-strong-wind"></i>
          <div>11km/hr</div>
        </div>
        <div className="humidity flex">
          <i className="wi wi-raindrop"></i> <div>20%</div>
        </div>
        <div className="pressure flex">
          <i className="wi wi-barometer"></i> <div>1024mb</div>
        </div>
      </div>

      <div className="temp">63℃</div>
      {/* <div className="time">14:35</div> */}
    </div>
  );
};

export default Weather;
