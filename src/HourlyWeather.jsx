import { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, LabelList } from 'recharts';
import { formatAMPM } from './utils';
import { hourlyWeatherApi } from './utils/api';

let data = [];
const fetchHourlyWeather = async (coordinate, setChartData) => {
  try {
    const response = await hourlyWeatherApi(
      coordinate.latitude,
      coordinate.longitude
    );
    const time = response.data.hourly.time;
    const temperature = response.data.hourly.temperature_2m;
    data = [];

    temperature.map((row, index) => {
      data.push({
        time: formatAMPM(new Date(time[index])),
        temperature: Math.round(row),
      });
    });
    setChartData(data);
  } catch (error) {
    console.log(error);
  }
};

const renderAreaChart = (chartData) => (
  <AreaChart
    height={200}
    style={{ overflow: 'auto' }}
    data={chartData}
    width={1500}
    margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
  >
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
      </linearGradient>
    </defs>
    <XAxis dataKey="time" />

    <Tooltip />
    <Area
      type="monotone"
      dataKey="temperature"
      stroke="#8884d8"
      fillOpacity={1}
      fill="url(#colorUv)"
    >
      <LabelList dataKey="temperature" position="insideBottom" />
    </Area>
  </AreaChart>
);

const HourlyWeather = ({ coordinate }) => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    fetchHourlyWeather(coordinate, setChartData);
  }, [coordinate]);
  return (
    <div className=" flex justify-center ">{renderAreaChart(chartData)}</div>
  );
};
export default HourlyWeather;
