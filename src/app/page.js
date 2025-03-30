'use client';
import { useEffect } from 'react';
import SearchBar from "./components/SearchBar";
import TopCities from "./components/TopCities";
import WeatherNow from "./components/WeatherNow";
import FiveDayForecast from "./components/FiveDayForecast";
import { useWeather } from './context/WeatherContext';
import { fetchWeather } from './utils/api';
import { getDefaultCity } from './utils/storage';
import styles from "./page.module.css";

export default function Home() {
  const { weatherData, setWeatherData } = useWeather();

  useEffect(() => {
    if (!weatherData) {
      const loadDefaultCity = async () => {
        const defaultCity = getDefaultCity();
        const data = await fetchWeather(defaultCity);
        setWeatherData(data);
      };
      loadDefaultCity();
    }
  }, [weatherData, setWeatherData]);

  return (
    <main className={styles.main}>
      <SearchBar />
      <TopCities />
      <WeatherNow />
      <FiveDayForecast />
    </main>
  );
}