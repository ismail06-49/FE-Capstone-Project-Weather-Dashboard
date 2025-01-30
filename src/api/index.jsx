import axios from "axios";
import { toast } from 'react-toast'

// Function to fetch weather data from the Meteosource API
export async function getWeatherData(endpoint, place_id, measurementSystem) {

    // Define the request options for the API call
    const option = {
        method: 'GET',
        url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`, // API endpoint
        params: {
            place_id, // Unique identifier for the location
            language: 'en', // Language for the response
            units: measurementSystem // Measurement system (e.g., metric or us)
        },
        headers: {
            'x-rapidapi-key': 'efb7faeb42msh9d98b513f2aba96p15c782jsn754d142aebb7',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        // Make the API request using axios
        const response = await axios.request(option);
        // Return the weather data from the response
        return response.data;
    } catch (error) {
        console.error(error);
        // Display an error message using toast
        toast.error(error.message)
    }
}

// Function to search for places using the Meteosource API
export async function searchPlaces(text) {

    // Define the request options for the API call
    const option = {
        method: 'GET',
        url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places', 
        params: {
            text, // Search query (e.g., city name)
            language: 'en'
        },
        headers: {
            'x-rapidapi-key': 'efb7faeb42msh9d98b513f2aba96p15c782jsn754d142aebb7',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com' 
        }
    };

    try {
        // Make the API request using axios
        const response = await axios.request(option);
        // Return the search results from the response
        return response.data;
    } catch (error) {
        console.error(error);
        // Display an error message using toast
        toast.error(error.message)
    }
}
