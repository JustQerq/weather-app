import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import WeatherCard from '../components/WeatherCard'
import LocationForm from '../components/LocationForm'
import api_keys from '../../api_keys.json'

const CurrentPage = ({backend_url}) => {
    const hasMounted = useRef(false);

    const [weatherData, setWeatherData] = useState([])
    const [weatherLoading, setWeatherLoading] = useState(true)
    const [weatherError, setWeatherError] = useState(null)

    const [llmData, setLLMData] = useState([])
    const [llmLoading, setLLMLoading] = useState(true)
    const [llmError, setLLMError] = useState(null)

    
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const handleCityChange = (event) => {
        let value = event.target.value;
        setCity(value);
    }

    const handleCountryChange = (event) => {
        let value = event.target.value;
        setCountry(value);
    }
    
    const handleLatitudeChange = (event) => {
        let value = event.target.value;
        setLatitude(value);
    }
    
    const handleLongitudeChange = (event) => {
        let value = event.target.value;
        setLongitude(value);
    }

    const handleUpdate = () => {
        let url = ""
        if (city != ""){
            if (country != ""){
                url = `${backend_url}/weather/current?city=${city}&country=${country}`;
            } else {
                url = `${backend_url}/weather/current?city=${city}`
            }
        } else if ((latitude != "") && (longitude != "")) {
            url = `${backend_url}/weather/current?latitude=${latitude}&longitude=${longitude}`
        }

        if (url != "")
        axios
            .get(url)
            .then((response) => {
                setWeatherData(response.data);
                setWeatherLoading(false);

                if(response.data && response.data.row){
                    const llmPrompt = "Today's weather in " + response.data["row"]["city"] + ", " + 
                        response.data["row"]["country"] + " is " + response.data["row"]["temperature_c"] + 
                        " degrees Celsius, wind speed " + response.data["row"]["wind_kph"] + " km/h, " +
                        response.data["row"]["condition"] + ". Based on this weather, what interesting places should I visit?";
                    
                    const url = "https://openrouter.ai/api/v1/responses"
                    const post_headers = {
                        'Authorization': `Bearer ${api_keys["open-router"]}`,
                        'Content-Type': 'application/json'
                    }
                    const post_body = {
                        'model': 'meta-llama/llama-3.3-8b-instruct:free',
                        'input': llmPrompt,
                        'max_output_tokens': 1000
                    }

                    axios
                        .post(url, post_body, { headers: post_headers })
                        .then((responseLLM) => {
                            console.log(responseLLM.data);
                            setLLMData(responseLLM.data["output"][0]["content"][0]["text"])
                            setLLMLoading(false);
                        })
                        .catch((err) => {
                            setLLMError(err.message);
                            setLLMLoading(false);
                        })
                }
            })
            .catch((err) => {
                setWeatherError(err.message);
                setWeatherLoading(false);
            });
    }
    

    useEffect(() => {
        if(hasMounted.current){
            axios
                .get("https://geolocation-db.com/json/")
                .then((responseLocation) => {
                    setCity(responseLocation.data["city"])
                    setCountry(responseLocation.data["country_name"])
                    setLatitude(responseLocation.data["latitude"])
                    setLongitude(responseLocation.data["longitude"])

                    if(responseLocation.data){
                        console.log(`city: ${responseLocation.data["city"]}, country: ${responseLocation.data["country_name"]}, latitude: ${responseLocation.data["latitude"]}, longitude: ${responseLocation.data["longitude"]}`)
                    }
                    axios
                        .get(`${backend_url}/weather/current?city=${responseLocation.data["city"]}&country=${responseLocation.data["country_name"]}`)
                        .then((response) => {
                            setWeatherData(response.data);
                            setWeatherLoading(false);

                            if(response.data && response.data.row){
                                const llmPrompt = "Today's weather in " + response.data["row"]["city"] + ", " + 
                                    response.data["row"]["country"] + " is " + response.data["row"]["temperature_c"] + 
                                    " degrees Celsius, wind speed " + response.data["row"]["wind_kph"] + " km/h, " +
                                    response.data["row"]["condition"] + ". Based on this weather, what interesting places should I visit?";
                                
                                const url = "https://openrouter.ai/api/v1/responses"
                                const post_headers = {
                                    'Authorization': `Bearer ${api_keys["open-router"]}`,
                                    'Content-Type': 'application/json'
                                }
                                const post_body = {
                                    'model': 'meta-llama/llama-3.3-8b-instruct:free',
                                    'input': llmPrompt,
                                    'max_output_tokens': 1000
                                }

                                axios
                                    .post(url, post_body, { headers: post_headers })
                                    .then((responseLLM) => {
                                        console.log(responseLLM.data);
                                        setLLMData(responseLLM.data["output"][0]["content"][0]["text"])
                                        setLLMLoading(false);
                                    })
                                    .catch((err) => {
                                        setLLMError(err.message);
                                        setLLMLoading(false);
                                    })
                            }
                        })
                        .catch((err) => {
                            setWeatherError(err.message);
                            setWeatherLoading(false);
                        });
                })
                .catch((err) => {
                    setWeatherError(err.message);
                    setWeatherLoading(false);
                });
        } else {
            hasMounted.current = true;
        }
    }, [backend_url]);


    return (
        <div className="h-screen max-h-screen bg-linear-to-br from-blue-300 to-purple-400 flex flex-col items-center justify-center space-y-5 p-4">
            <div className='mt-10'>
                {
                    weatherLoading ? (<p>Loading weather information...</p>)
                    : weatherError ? (<p>{weatherError}</p>)
                    : (<WeatherCard data={weatherData["row"]} />)
                }
            </div>
            <div>
                <LocationForm 
                    city={city} 
                    onCityChange={handleCityChange} 
                    country={country} 
                    onCountryChange={handleCountryChange} 
                    latitude={latitude} 
                    onLatitudeChange={handleLatitudeChange} 
                    longitude={longitude} 
                    onLongitudeChange={handleLongitudeChange} 
                    onUpdate={handleUpdate}
                />
            </div>
            <p className='bg-indigo-100 rounded-sm max-w-4xl p-4'>
                {llmLoading ? (
                "Loading interesting places..."
                ) : llmError ? (
                    llmError
                ) : (
                    llmData
                )}
            </p>
        </div>
    )
}

export default CurrentPage