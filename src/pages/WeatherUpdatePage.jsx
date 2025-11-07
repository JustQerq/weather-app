import React, { useState } from 'react'
import axios from 'axios'
import WeatherTable from "../components/WeatherTable"
import WeatherSearchForm from '../components/WeatherSearchForm'
import WeatherUpdateForm from '../components/WeatherUpdateForm'

const WeatherUpdatePage = ({backend_url}) => {
    const [data, setData] = useState({"rows":[]})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const [rowid, setRowid] = useState("");

    const handleRowidChange = (event) => {
        const value = event.target.value;
        setRowid(value);
        console.log(value)
    }
    
    const [newValues, setNewValues] = useState({
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
        setNewValues({
            ...newValues,
            [name]: value
        });
    };


    const handleShow = () => {
        let url = `${backend_url}/weather/history`;

        setError(false);
        if (rowid != ""){
            url = url + '/' + rowid;
            setLoading(true);
            axios
                .get(url)
                .then((response) => {
                    setData(response.data);
                    setLoading(false);
                    setNewValues(response.data["rows"][0]);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        };
    };


    const handleAdd = async () => {

        let url = `${backend_url}/weather/history`;

        setError(false);

        const post_headers = { 'Content-Type': 'application/json' }
        const post_body = {"rows": [newValues]}

        setLoading(true);
        axios
            .post(url, post_body, {post_headers})
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };


    const handleUpdate = async () => {

        let url = `${backend_url}/weather/history`;

        setError(false);
        if (rowid.length > 0){
            url = url + '/' + rowid;

            const put_headers = { 'Content-Type': 'application/json' }

            setLoading(true);
            axios
                .put(url, newValues, {put_headers})
                .then((response) => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        };
    };


    const handleDelete = async () => {

        let url = `${backend_url}/weather/history`;

        setError(false);
        if (rowid.length > 0){
            url = url + '/' + rowid;

            const delete_headers = { 'Content-Type': 'application/json' }

            setLoading(true);
            axios
                .delete(url, {delete_headers})
                .then((response) => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        };
    };

  
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
                <WeatherUpdateForm
                    rowid={rowid}
                    onRowidChange={handleRowidChange}
                    newValues={newValues}
                    onValuesChange={handleValuesChange}
                    onShow={handleShow}
                    onAdd={handleAdd}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    )
}

export default WeatherUpdatePage