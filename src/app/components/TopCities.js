'use client';

import { useEffect, useState } from 'react';
import { getTopCities } from '../utils/storage';
import { fetchWeather } from '../utils/api';
import { useWeather } from '../context/WeatherContext';
import styles from '../styles/components/topCities.module.scss';

export default function TopCities() {
  const { setWeatherData } = useWeather();
  const [topCities, setTopCities] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
        const allCities = getTopCities();
        const topThree = allCities.sort((a, b) => b.views - a.views).slice(0, 3);
        setTopCities(topThree);
    }, 1000);
    return () => clearInterval(interval);
}, []);

  const handleTopCityClick = async (cityName) => {
    const city = { name: cityName };
    const weatherData = await fetchWeather(city);
    setWeatherData(weatherData);
  };

  return (
    <div className={styles.topCities}>
      <h3>Most Viewed Cities</h3>
      {topCities.length > 0 ? (
        <ul>
          {topCities.map((city, index) => (
            <li key={index}>
              <button onClick={() => handleTopCityClick(city.name)}>
                {city.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cities viewed yet.</p>
      )}
    </div>
  );
}