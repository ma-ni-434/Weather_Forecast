const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = '7d20af87fafcaf54e399313b1d9f2912';

const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

// export async function fetchWeatherData(lat, lon) {
//   try {
//     let [weatherPromise, forcastPromise] = await Promise.all([
//       fetch(
//         `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//       ),
//       fetch(
//         `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//       ),
//     ]);

//     const weatherResponse = await weatherPromise.json();
//     const forcastResponse = await forcastPromise.json();
//     return [weatherResponse, forcastResponse];
//   } catch (error) {
//     console.log(error);
//   }
// }


// export async function fetchWeatherData(lat, lon) {
//   try {
//     // run both fetches in parallel
//     const [weatherRes, forecastRes] = await Promise.all([
//       fetch(
//         `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//       ),
//       fetch(
//         `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//       ),
//     ]);

//     // check if both succeeded
//     if (!weatherRes.ok || !forecastRes.ok) {
//       throw new Error("Failed to fetch weather data");
//     }

//     const weatherData = await weatherRes.json();
//     const forecastData = await forecastRes.json();

//     return [weatherData, forecastData];
//   } catch (error) {
//     console.error("Error in fetchWeatherData:", error);
//     return [null, null]; // return safe fallback
//   }
// }

export async function fetchWeatherData(lat, lon) {
  try {
    const [weatherRes, forecastRes] = await Promise.all([
      fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`),
      fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`),
    ]);

    if (!weatherRes.ok || !forecastRes.ok) {
      const errMsg = await weatherRes.text();
      throw new Error("Failed to fetch weather data: " + errMsg);
    }

    const weatherData = await weatherRes.json();
    const forecastData = await forecastRes.json();
    return [weatherData, forecastData];
  } catch (error) {
    console.error("Error in fetchWeatherData:", error);
    return [null, null];
  }
}


export async function fetchCities(input) {
  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      GEO_API_OPTIONS
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}
