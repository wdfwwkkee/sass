import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'
import CarDetail from '../screens/carDetail/CarDetail'

const Router = () => {
    return (<BrowserRouter>
    <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<CarDetail />} path='/car/:id' />



        <Route element={<div>Page is not found!</div>} path='*' />
    </Routes>

    </BrowserRouter>
    )
}

export default Router