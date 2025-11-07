import React from 'react'

const WeatherSearchForm = ({searchValues, onValuesChange, searchGreater, onGreaterChange, searchLess, onLessChange, onSubmit}) => {

    return (
        <form onSubmit={onSubmit}>
            <div className='grid grid-cols-2 gap-x-2 items-start mx-20'>
                <div id="values" className='grid grid-cols-2 space-x-4 space-y-1 mx-5'>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='datetime' className='text-gray-700'>Datetime in ISO format</label>
                        <input
                            type='text' 
                            name='datetime'
                            value={searchValues.datetime} 
                            onChange={onValuesChange} 
                            placeholder='YYYY-MM-DD HH:MM'
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='city' className='text-gray-700'>City name</label>
                        <input
                            type='text' 
                            name='city'
                            value={searchValues.city} 
                            onChange={onValuesChange} 
                            placeholder=''
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='country' className='text-gray-700'>Country name</label>
                        <input
                            type='text' 
                            name='country'
                            value={searchValues.country} 
                            onChange={onValuesChange} 
                            placeholder=''
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='latitude' className='text-gray-700'>Latitude</label>
                            <input
                            type='text' 
                            name='latitude'
                            value={searchValues.latitude} 
                            onChange={onValuesChange} 
                            placeholder='21.97'
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='longitude' className='text-gray-700'>Longitude</label>
                        <input
                            type='text' 
                            name='longitude'
                            value={searchValues.longitude} 
                            onChange={onValuesChange} 
                            placeholder='-120.38'
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='temperature_c' className='text-gray-700'>Temperature (C)</label>
                        <input
                            type='text' 
                            name='temperature_c'
                            value={searchValues.temperature_c} 
                            onChange={onValuesChange} 
                            placeholder='28.3'
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='feelslike_c' className='text-gray-700'>Feels like (C)</label>
                        <input
                            type='text' 
                            name='feelslike_c'
                            value={searchValues.feelslike_c} 
                            onChange={onValuesChange} 
                            placeholder='26.8'
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='humidity' className='text-gray-700'>Humidity (%)</label>
                        <input
                            type='text' 
                            name='humidity'
                            value={searchValues.humidity} 
                            onChange={onValuesChange} 
                            placeholder='50.2'
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='condition' className='text-gray-700'>Weather condition</label>
                        <input
                            type='text' 
                            name='condition'
                            value={searchValues.condition} 
                            onChange={onValuesChange} 
                            placeholder='Clear'
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                    <div className='grid grid-cols-1 gap-y-1'>
                        <label htmlFor='wind_kph' className='text-gray-700'>Wind speed (km/h)</label>
                        <input
                            type='text' 
                            name='wind_kph'
                            value={searchValues.wind_kph} 
                            onChange={onValuesChange} 
                            placeholder='12.4'
                            className='bg-white rounded-sm text-center'
                        />
                    </div>
                </div>
                <div id='filters' className='flex flex-col flex-wrap space-x-4 space-y-3 mx-5'>
                    <div className='flex flex-row items-center justify-center space-x-10'>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='datetime_gr' className='text-gray-700'>Datetime from</label>
                            <input
                                type='text' 
                                name='datetime_gr'
                                value={searchGreater.datetime_gr} 
                                onChange={onGreaterChange} 
                                placeholder='YYYY-MM-DD HH:MM'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                        <p> - </p>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='datetime_ls' className='text-gray-700'>Datetime to</label>
                            <input
                                type='text' 
                                name='datetime_ls'
                                value={searchLess.datetime_ls} 
                                onChange={onLessChange} 
                                placeholder='YYYY-MM-DD HH:MM'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center space-x-10'>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='temperature_gr' className='text-gray-700'>Temperature from (C)</label>
                            <input
                                type='text' 
                                name='temperature_c_gr'
                                value={searchGreater.temperature_c_gr} 
                                onChange={onGreaterChange} 
                                placeholder='0.0'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                        <p> - </p>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='temperature_ls' className='text-gray-700'>Temperature to (C)</label>
                            <input
                                type='text' 
                                name='temperature_c_ls'
                                value={searchLess.temperature_c_ls} 
                                onChange={onLessChange} 
                                placeholder='0.0'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center space-x-10'>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='feelslike_gr' className='text-gray-700'>Feels like from (C)</label>
                            <input
                                type='text' 
                                name='feelslike_c_gr'
                                value={searchGreater.feelslike_gr} 
                                onChange={onGreaterChange} 
                                placeholder='0.0'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                        <p> - </p>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='feelslike_ls' className='text-gray-700'>Feels like to (C)</label>
                            <input
                                type='text' 
                                name='feelslike_c_ls'
                                value={searchLess.feelslike_ls} 
                                onChange={onLessChange} 
                                placeholder='0.0'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center space-x-10'>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='humidity_gr' className='text-gray-700'>Humidity from (%)</label>
                            <input
                                type='text' 
                                name='humidity_gr'
                                value={searchGreater.humidity_gr} 
                                onChange={onGreaterChange} 
                                placeholder='0.0'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                        <p> - </p>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='humidity_ls' className='text-gray-700'>Humidity to (%)</label>
                            <input
                                type='text' 
                                name='humidity_ls'
                                value={searchLess.humidity_ls} 
                                onChange={onLessChange} 
                                placeholder='0.0'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center space-x-10'>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='wind_kph_gr' className='text-gray-700'>Wind speed from (km/h)</label>
                            <input
                                type='text' 
                                name='wind_kph_gr'
                                value={searchGreater.wind_kph_gr} 
                                onChange={onGreaterChange} 
                                placeholder='0.0'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                        <p> - </p>
                        <div className='grid grid-cols-1 gap-y-1'>
                            <label htmlFor='wind_kph_ls' className='text-gray-700'>Wind speed to (km/h)</label>
                            <input
                                type='text' 
                                name='wind_kph_ls'
                                value={searchLess.wind_kph_ls} 
                                onChange={onLessChange} 
                                placeholder='0.0'
                                className='bg-white rounded-sm text-center'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <input type='submit' value="Search" className='bg-green-300 hover:shadow-md rounded-sm max-w-1/4 text-center text-xl px-10 py-2 my-4'/>
            </div>
        </form>
    )
}

export default WeatherSearchForm