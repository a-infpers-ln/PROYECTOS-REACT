import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"

function App() {

  const { weather, fetchWeather } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form 
          fetchWeather={fetchWeather}
        />
        
        <WeatherDetail 
          weather={weather}
        />
      </div>
    </>
  )
}

export default App
