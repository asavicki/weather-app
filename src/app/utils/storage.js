//Get top three cities from local storage
export const getTopCities = () => {
    const topCities = localStorage.getItem("topCities");
    return topCities ? JSON.parse(topCities) : [];
};

//Save cities to local storage
export const saveTopCities = (city) => {
    let allCities = getTopCities();

    //Find if the city is already in the list
    const existingCity = allCities.find(c => c.name.toLowerCase() === city.name.toLowerCase());
    
    if (existingCity) {
        existingCity.views += 1;
    } else {
        // Add the new city to the list
        allCities.push({ name: city.name, views: 1 });
    }

    //Save all cities to local storage
    localStorage.setItem("topCities", JSON.stringify(allCities));
};

// Get or set the default city
export const getDefaultCity = () => {
    const defaultCity = localStorage.getItem("defaultCity");
    return defaultCity ? JSON.parse(defaultCity) : { name: 'Vilnius' };
}

export const setDefaultCity = (city) => {
    localStorage.setItem("defaultCity", JSON.stringify(city));
}

