'use client';
import Image from "next/image";
import { useWeather } from "../context/WeatherContext";
import styles from "../styles/components/fiveDayForecast.module.scss";
import { formatDate } from "../utils/dateFormatter";

export default function FiveDayForecast() {
  const { weatherData } = useWeather();
  
  if (!weatherData) return null;

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className={styles.fiveDayForecastContainer}>
      <h2>5-Day Forecast for {weatherData.location.name}</h2>
      {weatherData.forecast.forecastday
        .filter(day => day.date !== today)
        .map((day, index) => (
          <div key={index} className={styles.fiveDayForecastCard}>
            <div className={styles.dataWrapper}>
              <div className={styles.data}>
                <p><strong>Date</strong><span>{formatDate(day.date)}</span></p>
                <p><strong>Max Temp</strong><span>{day.day.maxtemp_c}°C</span></p>
                <p><strong>Min Temp</strong><span>{day.day.mintemp_c}°C</span></p>
                <p><strong>Condition</strong><span>{day.day.condition.text}</span></p>
                <p><strong>Humidity</strong><span>{day.day.avghumidity}%</span></p>
                <p><strong>Wind</strong><span>{day.day.avgvis_km} km/h</span></p>
              </div>
              <Image
                src={`https:${day.day.condition.icon}`}
                alt="Weather Icon"
                width={50}
                height={50}
                className={styles.weatherIcon}
              />
            </div>
          </div>
        ))}
    </div>
  );
}