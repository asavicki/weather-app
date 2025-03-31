'use client';
import { useEffect, useState } from 'react';
import { fetchCities, fetchWeather } from "../utils/api";
import { saveTopCities } from "../utils/storage";
import { useWeather } from "../context/WeatherContext";
import Image from 'next/image';
import styles from "../styles/components/searchBar.module.scss";

export default function SearchBar() {
  const { setWeatherData } = useWeather();
  const [cities, setCities] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const queryChangeHandler = (event) => {
    setQuery(event.target.value);
  };


  // Fetches city suggestions with a 300ms debounce when query changes
  useEffect(() => {
    if (!query) {
      setCities([]);
      return;
    }
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      const cities = await fetchCities(query);
      setCities(cities);
      setLoading(false);
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [query]);


// Handles arrow key navigation and Enter to select a city
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => Math.min(prevIndex + 1, cities.length - 1));
    } else if (event.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (event.key === "Enter" && selectedIndex >= 0) {
      handleCitySelect(cities[selectedIndex]);
    }
  };

  // Processes city selection: logs it, fetches weather, updates context
  const handleCitySelect = async (city) => {
    setQuery(city.name);
    setCities([]);
    setQuery("");
    setSelectedIndex(-1);
    saveTopCities(city);
    try {
      await fetch('http://localhost:3001/logs/log-action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city: city.name }),
      });
    } catch (error) {
      console.error('Error logging city selection:', error);
    }
    const weatherData = await fetchWeather(city);
    setWeatherData(weatherData);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={queryChangeHandler}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
        placeholder="Enter a city"
      />
      <Image
        src="/images/search-right-1507-svgrepo-com.svg"
        width={24}
        height={24}
        alt="Search Icon"
        className={styles.searchIcon}
      />
      {loading && <p>Loading...</p>}
      {cities.length > 0 && (
        <ul>
          {cities.map((city, index) => (
            <li key={city.geonameId} className={index === selectedIndex ? styles.selected : ''}>
              <button onClick={() => handleCitySelect(city)}>
                {city.name}, {city.country}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}