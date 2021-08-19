const appid = "3a1236006aac8f9627b2c2e54c3fa808";

export const getWeatherUrl = ({ city, countryCode }) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;

export const getForecastUrl = ({ city, countryCode }) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`;
