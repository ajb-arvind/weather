import { useEffect, useState } from 'react';
import { formatDateToDDMM } from './utils';
import { getWeatherDescByCode, getWeatherImgByCode } from './utils/weatherCode';
import { multiDayWeatherApi } from './utils/api';

const fetchDailyWeather = async (coordinate, setSevenDayWeather) => {
  try {
    const response = await multiDayWeatherApi(
      coordinate.latitude,
      coordinate.longitude
    );
    const time = response.data.daily.time;
    const temperature_max = response.data.daily.temperature_2m_max;
    const temperature_min = response.data.daily.temperature_2m_min;
    const weather_code = response.data.daily.weather_code;

    let data = [];

    time.map((row, index) => {
      data.push({
        time: formatDateToDDMM(new Date(row)),
        temperature_max: Math.round(temperature_max[index]),
        temperature_min: Math.round(temperature_min[index]),
        weather_code: weather_code[index],
      });
    });

    setSevenDayWeather(data);
  } catch (error) {
    console.log(error);
  }
};

const MultidayWeather = ({ coordinate }) => {
  const [sevenDayWeather, setSevenDayWeather] = useState([]);

  useEffect(() => {
    fetchDailyWeather(coordinate, setSevenDayWeather);
  }, [coordinate]);

  return (
    <>
      <h1 className=" mt-8">Daily</h1>
      <section className=" mt-2 flex flex-nowrap flex-col justify-evenly items-center gap-2 overflow-y-scroll ">
        {sevenDayWeather.map((x, index) => {
          return (
            <div
              key={x.time}
              className=" mt-1 flex flex-row justify-between  sm:justify-between items-center py-4 w-full md:w-[80%] bg-white border border-gray-200 rounded-lg shadow"
            >
              <div className="flex flex-col sm:flex-row sm:w-48 sm:justify-between  pl-4 sm:pl-8 items-center  justify-center">
                <p>
                  {index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : x.time}
                </p>

                <img
                  className=" h-16 p-2"
                  src={getWeatherImgByCode(x.weather_code)}
                  alt={getWeatherDescByCode(x.weather_code)}
                />
              </div>
              <div className=" pr-2 sm:pr-8 flex flex-col items-end">
                <p className=" text-lg text-ellipsis whitespace-nowrap overflow-hidden max-w-[10rem] sm:max-w-full p-2">
                  {getWeatherDescByCode(x.weather_code)}
                </p>
                <div className=" flex gap-4 ">
                  <p className=" text-sm font-bold tracking-wider  text-gray-900 dark:text-white">
                    {x.temperature_max}°C
                  </p>

                  <p className=" text-sm font-normal tracking-normal text-gray-700 dark:text-white">
                    {x.temperature_min}°C
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
export default MultidayWeather;
