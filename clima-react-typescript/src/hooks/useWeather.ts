import axios from "axios"
import {z} from 'zod'
//import {object, string, number, InferOutput, parse} from 'valibot'
import { SearchType } from "../types"
import { useMemo, useState } from "react"

//TYPE GUARD O ASSERTION
/*function isWeatherResponse(weather : unknown) : weather is Weather{
    return (
        Boolean(weather) &&
        typeof weather === 'object' &&
        typeof (weather as Weather).name === 'string' &&
        typeof (weather as Weather).main.temp === 'number' &&
        typeof (weather as Weather).main.temp_max === 'number' &&
        typeof (weather as Weather).main.temp_min === 'number' 
    )

}*/

//Zod
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
})

export type Weather = z.infer<typeof Weather>

//Valibot
/*const WeatherSchema = object({
    name: string(),
    main: object({
        temp: number(),
        temp_max: number(),
        temp_min: number()

    })
})
type Weather = InferOutput<typeof WeatherSchema>*/

export default function useWeather() {

    const [weather, setWeather] = useState({
        name: '',
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0
        }

    })

    const [loading, setloading] = useState(false)

    const fetchWeather = async (search: SearchType) => {

        const appId = import.meta.env.VITE_API_KEY
        setloading(true)
        try {
                
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=~${appId}`

            const {data} = await axios.get(geoUrl)

            const lat = data[0].lat
            const lon = data[0].lon

            const wetherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            //Castear el type
            //const { data: weatherResult } = await axios<Weather>(wetherUrl)

            //Type Guards
            /*const { data: weatherResult } = await axios<Weather>(wetherUrl)
            const result = isWeatherResponse(weatherResult)

            if(result) {

            }else{
                console.log('Respuesta mal formada')
            }*/

            //Zod
            const { data: weatherResult } = await axios<Weather>(wetherUrl)
            const result = Weather.safeParse(weatherResult)
            if(result.success) {
                setWeather(result.data)
            }else{
                console.log('Respuesta mal formada')
            }

            //Valibot
            /*const { data: weatherResult } = await axios<Weather>(wetherUrl)
            const result = parse(WeatherSchema, weatherResult)

            if(result) {

            }else{
                console.log('Respuesta mal formada')
            }*/

            
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false)
        }
    }

    const hasWeatherData = useMemo(() => weather.name, [weather])

    return {
        weather,
        loading,
        fetchWeather,
        hasWeatherData
    }
}