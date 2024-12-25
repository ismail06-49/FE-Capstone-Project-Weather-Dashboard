import axios from "axios";

export async function getWeatherData(endpoint, place_id, measurementSystem) {

    const option = {
        method: 'GET',
        url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
        params: {
            place_id,
            language: 'en',
            units: measurementSystem
        },
        headers: {
            'x-rapidapi-key': 'efb7faeb42msh9d98b513f2aba96p15c782jsn754d142aebb7',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(option);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function searchPlaces(text) {

    const option = {
        method: 'GET',
        url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
        params: {
            text,
            language: 'en'
        },
        headers: {
            'x-rapidapi-key': 'efb7faeb42msh9d98b513f2aba96p15c782jsn754d142aebb7',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(option);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}