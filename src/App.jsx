import React from 'react'
import "./index.css"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import CurrentPage from './pages/CurrentPage'
import HistoryPage from './pages/HistoryPage'
import WeatherUpdatePage from './pages/WeatherUpdatePage'
import ForecastPage from './pages/ForecastPage'
import AboutPage from './pages/AboutPage'

/* <Route path='/Forecast' element={<ForecastPage />} /> */

const backend_url = "http://127.0.0.1:5000"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<CurrentPage backend_url={backend_url} />} />
      <Route path='/Forecast' element={<ForecastPage backend_url={backend_url} />} />
      <Route path='/History' element={<HistoryPage backend_url={backend_url} />} />
      <Route path='/Modify' element={<WeatherUpdatePage backend_url={backend_url} />} />
      <Route path='/About' element={<AboutPage />} />
    </Route>
  )
)

function App() {
  return<RouterProvider router={router} />
}

export default App;