import React from 'react'

const WeatherUpdateForm = ({rowid, onRowidChange, newValues, onValuesChange, onShow, onAdd, onUpdate, onDelete}) => {

    return (
        <form>
            <div id="values" className='flex flex-row space-x-4 space-y-1 mx-5'>
                <div className='grid grid-cols-1 gap-y-1'>
                    <label htmlFor='rowid' className='text-gray-700'>Row ID to show/update/delete</label>
                    <input
                        type='text' 
                        name='rowid'
                        value={rowid} 
                        onChange={onRowidChange} 
                        placeholder='2'
                        className='bg-white rounded-sm text-center'
                    />
                </div>
                <div className='grid grid-cols-1 gap-y-1'>
                    <label htmlFor='datetime' className='text-gray-700'>Datetime in ISO format</label>
                    <input
                        type='text' 
                        name='datetime'
                        value={newValues.datetime} 
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
                        value={newValues.city} 
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
                        value={newValues.country} 
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
                        value={newValues.latitude} 
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
                        value={newValues.longitude} 
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
                        value={newValues.temperature_c} 
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
                        value={newValues.feelslike_c} 
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
                        value={newValues.humidity} 
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
                        value={newValues.condition} 
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
                        value={newValues.wind_kph} 
                        onChange={onValuesChange} 
                        placeholder='12.4'
                        className='bg-white rounded-sm text-center'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-10 mt-10'>
                <button type='button' className='bg-green-300 hover:shadow-md rounded-sm max-w-1/4 text-center text-xl px-10 py-2 my-4' onClick={onShow}>
                    Show
                </button>
                <button type='button' className='bg-green-300 hover:shadow-md rounded-sm max-w-1/4 text-center text-xl px-10 py-2 my-4' onClick={onAdd}>
                    Add
                </button>
                <button type='button' className='bg-green-300 hover:shadow-md rounded-sm max-w-1/4 text-center text-xl px-10 py-2 my-4' onClick={onUpdate}>
                    Update
                </button>
                <button type='button' className='bg-green-300 hover:shadow-md rounded-sm max-w-1/4 text-center text-xl px-10 py-2 my-4' onClick={onDelete}>
                    Delete
                </button>
            </div>
        </form>
    )
}

export default WeatherUpdateForm