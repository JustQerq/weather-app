import React from 'react'

const LocationForm = ({city, onCityChange, country, onCountryChange, latitude, onLatitudeChange, longitude, onLongitudeChange, onUpdate}) => {

    return (
        <form>
            <div id="values" className='flex flex-row space-x-4 space-y-1 mx-5'>
                <div className='grid grid-cols-1 gap-y-1'>
                    <label htmlFor='city' className='text-gray-700'>City name</label>
                    <input
                        type='text' 
                        name='city'
                        value={city} 
                        onChange={onCityChange} 
                        placeholder=''
                        className='bg-white rounded-sm text-center'
                    />
                </div>
                <div className='grid grid-cols-1 gap-y-1'>
                    <label htmlFor='country' className='text-gray-700'>Country name</label>
                    <input
                        type='text' 
                        name='country'
                        value={country} 
                        onChange={onCountryChange} 
                        placeholder=''
                        className='bg-white rounded-sm text-center'
                    />
                </div>
                <div className='grid grid-cols-1 gap-y-1'>
                    <label htmlFor='latitude' className='text-gray-700'>Latitude</label>
                        <input
                        type='text' 
                        name='latitude'
                        value={latitude} 
                        onChange={onLatitudeChange} 
                        placeholder='21.97'
                        className='bg-white rounded-sm text-center'
                    />
                </div>
                <div className='grid grid-cols-1 gap-y-1'>
                    <label htmlFor='longitude' className='text-gray-700'>Longitude</label>
                    <input
                        type='text' 
                        name='longitude'
                        value={longitude} 
                        onChange={onLongitudeChange} 
                        placeholder='-120.38'
                        className='bg-white rounded-sm text-center'
                    />
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-10 mt-10'>
                <button type='button' className='bg-green-300 hover:shadow-md rounded-sm max-w-1/4 text-center text-xl px-10 py-2 my-4' onClick={onUpdate}>
                    Update location
                </button>
            </div>
        </form>
    )
}

export default LocationForm