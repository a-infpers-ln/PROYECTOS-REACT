import axios from "axios"
import { SearchType, Weather } from "../types"

export default function useWeather() {
    const fetchWeather = async (search: SearchType) => {

        const appId = import.meta.env.VITE_API_KEY
        try {
                
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=~${appId}`

            const {data} = await axios.get(geoUrl)

            const lat = data[0].lat
            const lon = data[0].lon

            const wetherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const { data: weatherResult } = await axios<Weather>(wetherUrl)
            
        } catch (error) {
            console.log(error)
        }

    }

    return {
        fetchWeather
    }
}