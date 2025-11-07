import React from 'react'

const WeatherForecastTable = ({data}) => {
    const weather_fields = ["date", "city", "country", "latitude", "longitude", "temperature_min_c",
        "temperature_max_c", "temperature_avg_c", "humidity_avg", "condition", "wind_max_kph"];

    return (
        <table className="table-auto border-collapse">
            <thead>
                <tr>
                    <th className="border-2 border-gray-600 text-center p-2">Date</th>
                    <th className="border-2 border-gray-600 text-center p-2">City</th>
                    <th className="border-2 border-gray-600 text-center p-2">Country</th>
                    <th className="border-2 border-gray-600 text-center p-2">Latitude</th>
                    <th className="border-2 border-gray-600 text-center p-2">Longitude</th>
                    <th className="border-2 border-gray-600 text-center p-2">Min. Temperature (C)</th>
                    <th className="border-2 border-gray-600 text-center p-2">Max. Temperature (C)</th>
                    <th className="border-2 border-gray-600 text-center p-2">Avg. Temperature (C)</th>
                    <th className="border-2 border-gray-600 text-center p-2">Avg. Humidity</th>
                    <th className="border-2 border-gray-600 text-center p-2">Condition</th>
                    <th className="border-2 border-gray-600 text-center p-2">Max. Wind (k/h)</th>
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

export default WeatherForecastTable