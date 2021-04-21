import "../styles/weather-icons.min.css";

const Weather = ({ data }) => {
  return (
    <div className="Weather">
      {/* <div className="flag">
        <img
          src={`https://www.countryflags.io/${data.sys.country.toLowerCase()}/flat/32.png`}
        ></img>
      </div> */}
      <div className="icon-bg">
        <i className={"wi wi-owm-" + data.weather[0].id}></i>
      </div>
      <div className="about">{data.weather[0].description}</div>

      <div className="aside">
        <div className="wind flex">
          <i className="wi wi-strong-wind"></i>
          <div>{data.wind.speed}km/hr</div>
        </div>
        <div className="humidity flex">
          <i className="wi wi-raindrop"></i> <div>{data.main.humidity}%</div>
        </div>
        <div className="pressure flex">
          <i className="wi wi-barometer"></i> <div>{data.main.pressure}mb</div>
        </div>
      </div>

      <div className="temp">{data.main.temp}°</div>
      {/* <div className="time">14:35</div> */}
    </div>
  );
};

export default Weather;
