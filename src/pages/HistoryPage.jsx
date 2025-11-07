import React, { useState } from 'react'
import axios from 'axios'
import WeatherTable from "../components/WeatherTable"
import WeatherSearchForm from '../components/WeatherSearchForm'

const HistoryPage = ({backend_url}) => {
    const [data, setData] = useState({"rows":[]})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const weather_filters_values = ["datetime", "city", "country", "latitude", "longitude", 
        "temperature_c", "feelslike_c", "humidity", "condition", "wind_kph"];

    const weather_filters_gr = ["datetime_gr", "temperature_c_gr", "feelslike_c_gr", "humidity_gr", "wind_kph_gr"];

    const weather_filters_ls = ["datetime_ls", "temperature_c_ls", "feelslike_c_ls", "humidity_ls", "wind_kph_ls"];

    const [searchValues, setSearchValues] = useState({
        'datetime': "",
        "city": "",
        "country": "",
        "latitude": "",
        "longitude": "",
        "temperature_c": "",
        "feelslike_c": "",
        "humidity": "",
        "condition": "",
        "wind_kph": ""
    });

    const handleValuesChange = (event) => {
        const {name, value} = event.target;
        setSearchValues({
            ...searchValues,
            [name]: value
        });
    };

    const [searchGreater, setSearchGreater] = useState({
        'datetime_gr': "",
        "temperature_c_gr": "",
        "feelslike_c_gr": "",
        "humidity_gr": "",
        "wind_kph_gr": ""
    });

    const handleGreaterChange = (event) => {
        const {name, value} = event.target;
        setSearchGreater({
            ...searchGreater,
            [name]: value
        });
    };

    const [searchLess, setSearchLess] = useState({
        'datetime_ls': "",
        "temperature_c_ls": "",
        "feelslike_c_ls": "",
        "humidity_ls": "",
        "wind_kph_ls": ""
    });

    const handleLessChange = (event) => {
        const {name, value} = event.target;
        setSearchLess({
            ...searchLess,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        let url = `${backend_url}/weather/history`;
        let params = [];

        weather_filters_values.map((filter) => {
            let value = searchValues[filter];
            if (value != ""){
                params.push(`${filter}=${value}`)
            }
        });

        weather_filters_gr.map((filter) => {
            let value = searchGreater[filter];
            if (value != ""){
                params.push(`${filter}=${value}`)
            }
        });

        weather_filters_ls.map((filter) => {
            let value = searchLess[filter];
            if (value != ""){
                params.push(`${filter}=${value}`)
            }
        });

        if (params.length > 0){
            url = url + '?' + params.join('&')
        };
        console.log(url);

        setLoading(true);
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }
  
    return (
        <div className='bg-indigo-200 flex flex-col space-y-5 h-screen'>
            <div className='bg-indigo-100 rounded-md mx-auto mt-25 flex justify-center overflow-scroll'>
                {
                    loading ? (<p>Loading...</p>)
                    : error ? (<p>Error: {error}</p>)
                    : (<WeatherTable data={data["rows"]} />)
                }
            </div>
            <div className='my-4'>
                <WeatherSearchForm 
                    searchValues={searchValues} 
                    onValuesChange={handleValuesChange} 
                    searchGreater={searchGreater}
                    onGreaterChange={handleGreaterChange}
                    searchLess={searchLess}
                    onLessChange={handleLessChange}
                    onSubmit={handleSubmit}
                    />
            </div>
        </div>
    )
}

export default HistoryPage