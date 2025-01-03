import axios from "axios";
import { toast } from 'react-toast'

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
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(option);
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error(error.message)
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
            'x-rapidapi-key': import.meta.env.VITE_API_KEY,
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(option);
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error(error.message)
    }
}