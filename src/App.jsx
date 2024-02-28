import { useState } from 'react'
import './App.css'
import './static/style.css'
import { Button, TextField } from '@mui/material'
import Home from './pages/Home.jsx'
import CreatePlace from './pages/CreatePlace.jsx'
import GetPlace from './pages/GetPlace.jsx'
import UpdatePlace from './pages/UpdatePlace.jsx'
import DeletePlace from './pages/DeletePlace.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route path={"/create"} element={<CreatePlace/>} />
          <Route path={"/get"} element={<GetPlace/>} />
          <Route path={"/update"} element={<UpdatePlace/>} />
          <Route path={"/delete"} element={<DeletePlace/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
