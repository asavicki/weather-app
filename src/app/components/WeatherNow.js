'use client';
import Image from "next/image";
import { useWeather } from "../context/WeatherContext";
import styles from "../styles/components/weatherNow.module.scss";
import { formatDate } from "../utils/dateFormatter";

export default function WeatherNow() {
  const { weatherData } = useWeather();
  
  if (!weatherData) return null;

  return (
    <div className={`${styles.weatherNow} weatherNow`}>
      <div className={styles.card}>
        <h2>Current Weather in {weatherData.location.name}</h2>
        <div className={styles.dataWrapper}>
          <div className={styles.data}>
            <p><strong>Date - </strong> {formatDate(weatherData.current.last_updated)}</p>
            <p><strong>Temp - </strong> {weatherData.current.temp_c}°C</p>
            <p><strong>Condition - </strong> {weatherData.current.condition.text}</p>
            <p><strong>Humidity - </strong> {weatherData.current.humidity}%</p>
            <p><strong>Wind - </strong> {weatherData.current.wind_kph} km/h</p>
            <p><strong>Feels Like - </strong> {weatherData.current.feelslike_c}°C</p>
          </div>
          <Image
            src={`https:${weatherData.current.condition.icon}`}
            alt="Weather Icon"
            width={50}
            height={50}
            className={styles.weatherIcon}
          />
        </div>
      </div>
      <div className={styles.message}>
        <h1>Get the latest weather updates for your city</h1>
      </div>
    </div>
  );
}