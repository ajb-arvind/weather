import { useEffect, useState } from 'react';
import { WiThermometer } from 'react-icons/wi';
import { getDate, getWeekDay } from './utils';
import {
  getThermometerImage,
  getWeatherDescByCode,
  getWeatherImgByCode,
} from './utils/weatherCode';
import { singleDayWeatherApi } from './utils/api';

const fetchSingleDayWeather = async (coordinate, setSingleDayWeatherData) => {
  try {
    const response = await singleDayWeatherApi(
      coordinate.latitude,
      coordinate.longitude
    );
    setSingleDayWeatherData(response.data.current);
  } catch (error) {
    console.log(error.message);
  }
};

const SingledayWeather = ({ coordinate }) => {
  const [singleDayWeatherData, setSingleDayWeatherData] = useState({
    temperature_2m: '',
    relative_humidity_2m: '',
    precipitation_probability: '',
    wind_speed_10m: '',
    surface_pressure: '',
    weather_code: 0,
  });

  useEffect(() => {
    fetchSingleDayWeather(coordinate, setSingleDayWeatherData);
  }, [coordinate]);

  return (
    <div className="flex flex-col lg:flex-row justify-evenly ">
      <div className="flex flex-col py-2 gap-4 md:py-8 justify-center">
        <section className=" lg:py-12">
          <span>
            <h1 className="inline-block text-lg md:text-4xl lg:text-4xl lg:block">
              {getDate()}
            </h1>
            <span className=" text-sm md:text-lg"> {getWeekDay()}</span>
          </span>
        </section>
        <section>
          <h1 className=" text-3xl">
            {getWeatherDescByCode(singleDayWeatherData.weather_code)}
          </h1>
        </section>
      </div>

      <div className="sm:flex gap-16 justify-center">
        <section className=" py-2 sm:py-8 flex flex-wrap justify-center gap-2 ">
          <img
            className=" h-20 sm:h-80"
            src={getWeatherImgByCode(singleDayWeatherData.weather_code)}
            alt={getWeatherDescByCode(singleDayWeatherData.weather_code)}
          />
        </section>

        <section className="text-left flex md:flex-col py-2 sm:py-8 justify-center">
          <div className="">
            <div className=" flex items-center py-2 sm:py-4">
              <img
                className=" h-16"
                src={getThermometerImage(singleDayWeatherData.temperature_2m)}
                alt=""
              />
              <h1 className=" text-4xl font-extrabold">
                {singleDayWeatherData.temperature_2m}°C
              </h1>
            </div>
            <p className=" py-2">
              Pressure, mm {singleDayWeatherData.surface_pressure}
            </p>
            <p className=" py-2">
              Humidity, % {singleDayWeatherData.relative_humidity_2m}
            </p>
            <p className=" py-2">
              Probability of Perception, %{' '}
              {singleDayWeatherData.precipitation_probability}
            </p>
            <p className=" py-2">
              Wind, m/s {singleDayWeatherData.wind_speed_10m}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SingledayWeather;
