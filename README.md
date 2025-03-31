
Weather App
===========

Overview
--------

The Weather App is a **single-page web application** built with **Next.js** that allows users to search for a city's current weather and a 5-day forecast. It fetches weather data from **WeatherAPI** and city information from **GeoNames API**. The app also keeps track of the three most-viewed cities using **local storage**. It also logs user actions into the console performed in UI for the selected city.

Features
--------

-   **Search for a city** to get real-time weather data

-   **Display current weather conditions**, including temperature, humidity, wind speed, and more

-   **Show a 5-day weather forecast**, excluding the current day

-   **Automatically load a default city** when the app starts

-   **Store and suggest the 3 most-viewed cities** for quick access

Technologies Used
-----------------

-   **Next.js** (Front-end)

-   **Node.js** (Back-end)

-   **Context API** (State Management)

-   **SCSS/SASS** (Styling)

-   **WeatherAPI** (Weather data)

-   **GeoNames API** (City search)

-   **LocalStorage** (Persistent storage of most-viewed cities)

Project Structure
-----------------

```
/weather-app
│── public/          # Static assets (icons, images)
│── src/
│   ├── components/  # Reusable UI components
│   ├── context/     # Context API for weather state
│   ├── pages/       # Next.js pages
│   ├── styles/      # SCSS stylesheets
│   ├── utils/       # Utility functions (date formatting, API calls)
│── .env             # Environment variables for API keys
│── README.md        # Documentation
│── next.config.js   # Next.js configuration
│── package.json     # Dependencies and scripts

```

Installation & Setup
--------------------

1.  Clone the repository:

    ```
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app

    ```

2.  Install dependencies:

    ```
    npm install

    ```

3.  Create a `.env.local` file and add your API keys:

    ```
    NEXT_PUBLIC_WEATHER_API_KEY=your_weatherapi_key
    NEXT_PUBLIC_GEONAMES_USERNAME=your_geonames_username

    ```

4.  Start the development server:

    ```
    npm run dev

    ```

    The app will be available at **<http://localhost:3000>**.

API Integration
---------------

### **GeoNames API** (City Search)

-   Endpoint: `http://api.geonames.org/searchJSON`

-   Parameters:

    -   `name_startsWith`: Search query

    -   `featureClass=P`: Filter only populated places

    -   `maxRows=10`: Limit results

    -   `username=your_username`

-   Response:

    ```
    {
      "geonames": [
        {
          "name": "Vilnius",
          "countryName": "Lithuania",
          "geonameId": 123456
        }
      ]
    }

    ```

### **WeatherAPI** (Weather Data)

-   Endpoint: `https://api.weatherapi.com/v1/forecast.json`

-   Parameters:

    -   `key=your_api_key`

    -   `q=city_name`

    -   `days=5`

-   Response:

    ```
    {
      "location": { "name": "Vilnius", "country": "Lithuania" },
      "current": { "temp_c": 15, "condition": { "text": "Sunny" } },
      "forecast": {
        "forecastday": [
          { "date": "2025-03-30", "day": { "maxtemp_c": 18, "mintemp_c": 10 } }
        ]
      }
    }

    ```

Key Components
--------------

### **WeatherContext** (`context/WeatherContext.js`)

Manages global weather state and handles API fetching.

### **SearchBar** (`components/SearchBar.js`)

Allows users to search for cities and select from suggestions.

### **WeatherNow** (`components/WeatherNow.js`)

Displays current weather data.

### **FiveDayForecast** (`components/FiveDayForecast.js`)

Shows a 5-day weather forecast, excluding the current day.

### **MostViewedCities** (`components/MostViewedCities.js`)

Displays the three most-viewed cities stored in local storage.

Deployment
----------

To deploy the app on **Vercel**:

```
npm run build
vercel deploy

```

Future Enhancements
-------------------

-   Add unit tests using **Jest**

-   Improve UI with **Material UI or Carbon Design System**

-   Implement **dark mode**

-   Allow users to **set a preferred default city**

License
-------

This project is open-source under the **MIT License**.
