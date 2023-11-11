import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/';
const GEOCODING_BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search';

const customFetch = axios.create({
  baseURL: BASE_URL,
});

const customFetchGeocoding = axios.create({
  baseURL: GEOCODING_BASE_URL,
});

export const locationAPI = (cityName) => {
  return customFetchGeocoding(`?name=${cityName}&language=en&format=json`);
};

export const singleDayWeatherApi = (latitude, longitude) => {
  return customFetch(
    `forecast?timezone=auto&latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation_probability,wind_speed_10m,surface_pressure,weather_code`
  );
};

export const hourlyWeatherApi = (latitude, longitude) => {
  return customFetch(
    `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&timezone=auto&forecast_days=1`
  );
};

export const multiDayWeatherApi = (latitude, longitude) => {
  return customFetch(
    `forecast?timezone=auto&latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min`
  );
};
