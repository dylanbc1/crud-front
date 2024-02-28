import IDForm from '../components/IDForm.jsx'
import { TextField, Button } from "@mui/material"
import React, { useState } from 'react';
import {Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import axios from '../config/axios.js'

function GetPlace() {
    const [id, setId] = useState('')
    const [places, setPlaces] = useState([])


    const getPlace = async () => {
        try {
            const response = await axios.get(`${instance.getUri()}/espacios/${id}`)
            const responseData = Array.isArray(response.data.place) ? response.data.place : [response.data.place]
            setPlaces(responseData);
        } catch (e) {
            console.log(e)
        }
    }

    const getPlaces = async () => {
        try {
            const response = await axios.get(`/espacios`)
            setPlaces(response.data.places);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1>Get Place</h1>
            <p>If you want to get one place, type its ID, otherwise, click on 'Get All'</p>
            
            <div style={{marginTop: '50px'}} class="container-md">
                <form>
                    <TextField id="outlined-basic" label="ID" variant="outlined" onChange={(event) => setId(event.target.value)}></TextField>
                </form>
            </div>
            <Button style = {{marginTop: '20px'}} variant="contained" color="success" onClick={getPlace}> 
                Go
            </Button>

            <Button style = {{marginTop: '20px', marginLeft: '20px'}} variant="contained" color="success" onClick={getPlaces}>
                Get All
            </Button>
            
            <Table style={{marginTop: '40px'}} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Capacity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {places.map((place) => (
                        <TableRow key={place.ID}>
                            <TableCell>{place.ID}</TableCell>
                            <TableCell>{place.Name}</TableCell>
                            <TableCell>{place.Capacity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default GetPlace