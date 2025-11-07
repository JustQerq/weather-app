import React from 'react'

const WeatherTable = ({data}) => {
    const weather_fields = ["rowid", "datetime", "city", "country", "latitude", "longitude",
         "temperature_c", "feelslike_c", "humidity", "condition", "wind_kph"];

    return (
        <table className="table-auto border-collapse min-h-full">
            <thead>
                <tr>
                    <th className="border-2 border-gray-600 text-center p-2">ID</th>
                    <th className="border-2 border-gray-600 text-center p-2">Date and Time</th>
                    <th className="border-2 border-gray-600 text-center p-2">City</th>
                    <th className="border-2 border-gray-600 text-center p-2">Country</th>
                    <th className="border-2 border-gray-600 text-center p-2">Latitude</th>
                    <th className="border-2 border-gray-600 text-center p-2">Longitude</th>
                    <th className="border-2 border-gray-600 text-center p-2">Temperature (C)</th>
                    <th className="border-2 border-gray-600 text-center p-2">Feels like (C)</th>
                    <th className="border-2 border-gray-600 text-center p-2">Humidity</th>
                    <th className="border-2 border-gray-600 text-center p-2">Condition</th>
                    <th className="border-2 border-gray-600 text-center p-2">Wind (k/h)</th>
                </tr>
            </thead>
            <tbody>
                {data.map( (row, rowIndex) => 
                <tr key={rowIndex}>
                    {weather_fields.map((field) => (
                        <td key={field} className="border-2 border-gray-600 text-center p-2">
                            {row[field]}
                        </td>
                    ))}
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default WeatherTable