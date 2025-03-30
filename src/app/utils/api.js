
// Fetch cities from the Geonames API
export const fetchCities = async (query) => {
    if (!query) return [];

    const username = "asavicki";
    const url = `http://api.geonames.org/searchJSON?name_startsWith=${query}&featureClass=P&maxRows=10&username=${username}`;

    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error("Failed to fetch cities");

        const data = await response.json();
        // console.log(data);
        return data.geonames
            .filter(city => city.name.toLowerCase().includes(query.toLowerCase()))
            .map(city => ({
                name: city.name,
                country: city.countryName,
                geonameId: city.geonameId,
            }));
    } catch (error) {
        console.error('Error fetching cities', error);
        return [];
    }
}

//Fetch city wetaher data from the OpenMeteo API
export const fetchWeather = async (city) => {
    const apiKey = "46e530c95b3a4389bcb112427252803";

    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city.name}&days=6`;

    try {
        const forecastResponse = await fetch(forecastUrl);
        // console.log(forecastResponse.status);
        if (!forecastResponse.ok)
            throw new Error("Failed to fetch weather data");

        const weatherData = await forecastResponse.json();

        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data', error);
        return null;
    }
}