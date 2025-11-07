import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import WeatherForecastTable from '../components/WeatherForecastTable'
import LocationForm from '../components/LocationForm'

const ForecastPage = ({backend_url}) => {
    const hasMounted = useRef(false);

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
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
                url = `${backend_url}/weather/forecast?city=${city}&country=${country}`;
            } else {
                url = `${backend_url}/weather/forecast?city=${city}`
            }
        } else if ((latitude != "") && (longitude != "")) {
            url = `${backend_url}/weather/forecast?latitude=${latitude}&longitude=${longitude}`
        }

        if (url != ""){
            console.log(`${url}&days=5`);
            axios
                .get(`${url}&days=5`)
                .then((response) => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }
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
                        .get(`${backend_url}/weather/forecast?city=${responseLocation.data["city"]}&country=${responseLocation.data["country_name"]}&days=5`)
                        .then((response) => {
                            setData(response.data);
                            setLoading(false);
                        })
                        .catch((err) => {
                            setError(err.message);
                            setLoading(false);
                        });
                })
                .catch((err) => {
                    console.log(err.message)
                })
        } else{
            hasMounted.current = true;
        }
    }, [backend_url]);

  
    return (
        <div className="h-screen bg-linear-to-br from-blue-300 to-purple-400 flex flex-col items-center justify-center space-y-5 p-4">
            <div className='bg-indigo-100 rounded-md mx-auto mt-20 flex justify-center overflow-scroll max-h-2/3'>
                {
                    loading ? (<p>Loading...</p>)
                    : error ? (<p>Error: {error}</p>)
                    : (<WeatherForecastTable data={data["rows"]} />)
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
        </div>
    )
}

export default ForecastPage