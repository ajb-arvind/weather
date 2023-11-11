import clearSky from '../assets/weather-icon/0-clear-sky/0-clear_sky.png';
import cloud1 from '../assets/weather-icon/1-cloud/1-cloud.png';
import cloud2 from '../assets/weather-icon/1-cloud/2-cloud.png';
import cloud3 from '../assets/weather-icon/1-cloud/3-cloud.png';

import fog45 from '../assets/weather-icon/4-fog/45-fog.png';
import fog48 from '../assets/weather-icon/4-fog/48-fog.png';

import drizzle51 from '../assets/weather-icon/5-drizzle/51-drizzle.png';
import drizzle53 from '../assets/weather-icon/5-drizzle/53-drizzle.png';
import drizzle55 from '../assets/weather-icon/5-drizzle/55-drizzle.png';

import rain61 from '../assets/weather-icon/6-rain/61-rain.png';
import rain63 from '../assets/weather-icon/6-rain/63-rain.png';
import rain65 from '../assets/weather-icon/6-rain/65-rain.png';

import snow71 from '../assets/weather-icon/7-snow/71-snow.png';
import snow73 from '../assets/weather-icon/7-snow/73-snow.png';
import snow75 from '../assets/weather-icon/7-snow/75-snow.png';
import snow77 from '../assets/weather-icon/7-snow/77-snow.png';

import shower80 from '../assets/weather-icon/8-shower/80-shower.png';
import shower81 from '../assets/weather-icon/8-shower/81-shower.png';
import shower82 from '../assets/weather-icon/8-shower/82-shower.png';

import thunderstorm95 from '../assets/weather-icon/9-thunderstorm/95-thunderstorm.png';
import thunderstorm96 from '../assets/weather-icon/9-thunderstorm/96-thunderstorm.png';
import thunderstorm99 from '../assets/weather-icon/9-thunderstorm/99-thunderstorm.png';

import thermometer1 from '../assets/weather-icon/thermometer/1-thermometer.png';
import thermometer2 from '../assets/weather-icon/thermometer/2-thermometer.png';
import thermometer3 from '../assets/weather-icon/thermometer/3-thermometer.png';

export const weatherCode = {
  0: { description: 'Clear sky', img: clearSky },
  1: { description: 'Mainly clear', img: cloud1 },
  2: { description: 'Partly cloudy', img: cloud2 },
  3: { description: 'Overcast', img: cloud3 },
  45: { description: 'Fog: depositing rime fog', img: fog45 },
  48: { description: 'Fog: depositing rime fog', img: fog48 },
  51: { description: 'Drizzle: Light intensity', img: drizzle51 },
  53: { description: 'Drizzle: Moderate intensity', img: drizzle53 },
  55: { description: 'Drizzle: Dense intensity', img: drizzle55 },
  56: { description: 'Freezing Drizzle: Light intensity', img: drizzle51 },
  57: { description: 'Freezing Drizzle: Dense intensity', img: drizzle53 },
  61: { description: 'Rain: Slight intensity', img: rain61 },
  63: { description: 'Rain: Moderate intensity', img: rain63 },
  65: { description: 'Rain: Heavy intensity', img: rain65 },
  66: { description: 'Freezing Rain: Light intensity', img: rain61 },
  67: { description: 'Freezing Rain: Heavy intensity', img: rain65 },
  71: { description: 'Snow fall: Slight intensity', img: snow71 },
  73: { description: 'Snow fall: Moderate intensity', img: snow73 },
  75: { description: 'Snow fall: Heavy intensity', img: snow75 },
  77: { description: 'Snow grains', img: snow77 },
  80: { description: 'Rain showers: Slight intensity', img: shower80 },
  81: { description: 'Rain showers: Moderate intensity', img: shower81 },
  82: { description: 'Rain showers: Violent intensity', img: shower82 },
  85: { description: 'Snow showers: Slight intensity', img: snow71 },
  86: { description: 'Snow showers: Heavy intensity', img: snow77 },
  95: { description: 'Thunderstorm: Slight or moderate', img: thunderstorm95 },
  96: { description: 'Thunderstorm with slight hail', img: thunderstorm96 },
  99: { description: 'Thunderstorm with heavy hail', img: thunderstorm99 },
};

export const getWeatherImgByCode = (code) => {
  return weatherCode[code].img ? weatherCode[code].img : null;
};

export const getWeatherDescByCode = (code) => {
  return weatherCode[code].description ? weatherCode[code].description : null;
};


export const getThermometerImage = (temperature) => {
  return temperature < 11
    ? thermometer1
    : temperature > 30
    ? thermometer3
    : thermometer2;
};
