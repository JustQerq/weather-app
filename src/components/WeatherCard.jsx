import React from 'react'

const WeatherCard = ({data}) => {

  return (
    <div className="bg-indigo-100 rounded-lg shadow-md p-6 max-w-lg mx-auto flex flex-col md:flex-row items-center justify-between transition-all duration-300 hover:shadow-xl">
      {/* Left side: Temperature and Location */}
      <div className="flex flex-col items-center md:items-start md:mr-6 text-center md:text-left">
        <p>Actual</p>
        <div className="text-6xl font-bold text-blue-600 mb-1">
          {data["temperature_c"]}°
        </div>
        <div className="text-xl font-medium text-gray-700 mb-1">
          {data["city"]}
        </div>
        <div className="text-sm text-gray-500">
          {data["country"]}
        </div>
      </div>

      {/* Right side: Feels like, Condition and Wind */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <p>Feels like</p>
        <div className="text-6xl font-bold text-blue-600 mb-1">
          {data["feelslike_c"]}°
        </div>
        <div className="text-xl font-medium text-gray-700 mb-1">
          {data["condition"]}
        </div>
        <div className="text-sm text-gray-500">
          Wind: {data["wind_kph"]} km/h
        </div>
      </div>
    </div>
  );
};

export default WeatherCard