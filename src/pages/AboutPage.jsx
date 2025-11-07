import React from 'react'
import react from '../assets/react.svg'
import flask from '../assets/flask.svg'

const AboutPage = () => {
  return (
    <div className='flex flex-col min-w-screen h-screen items-center justify-center align-middle p-4 mt-10 space-y-20'>
        <p id='title' className='text-xl'>Weather app by Oleg Samarets</p>
        <div id='logos' className='flex flex-row items-center space-x-25'>
            <div id='logoReact' className='flex flex-col items-center'>
                <div id='logoReactImage'>
                    <img src={react} alt='Reactjs logo' className='w-52 h-52'/>
                </div>
                <p>
                    ReactJS Frontend
                </p>
            </div>
            <div id='logoFlask' className='flex flex-col items-center'>
                <div id='logoFlaskImage'>
                    <img src={flask} alt='Reactjs logo' className='w-52 h-52'/>
                </div>
                <p>
                    Flask Backend
                </p>
            </div>
        </div>
        <div id='Description' className='flex flex-col items-center mt-20 align-bottom space-y-15 text-center'>
            <div className='flex flex-col max-w-1/3 space-y-5 text-center'>
                <p>Completed as part of a test assignment for Project Manager Accelerator</p>
                <p>The Product Manager Accelerator Program is designed to support PM professionals through every stage of their careers. From students looking for entry-level jobs to Directors looking to take on a leadership role, the program has helped over hundreds of students fulfill their career aspirations.</p>
                <p>Project Manager Accelerator official website: <a href='https://www.pmaccelerator.io/' className='text-blue-500'>https://www.pmaccelerator.io/</a></p>
                <p>This app uses <a href="https://geolocation-db.com" className='text-blue-500'>geolocation-db.com</a> IP geolocation web service</p>
            </div>
        </div>
    </div>
  )
}

export default AboutPage