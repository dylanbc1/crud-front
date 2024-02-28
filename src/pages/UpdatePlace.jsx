import AllForm from "../components/AllForm"
import { TextField, Button } from "@mui/material"
import React, { useState } from 'react';
import axios from 'axios'
import instance from "../config/axios";

function UpdatePlace() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [capacity, setCapacity] = useState(1)

    const updatePlace = async () => {
        try {
            await axios.put(`${instance.getUri()}/espacios/${id}`, {
                Name: name,
                Capacity: parseInt(capacity),
              })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1>Update Place</h1>
            <p>Type the ID of the place you want to update and the things you want to be updated</p>
            
            <div style={{marginTop: '50px'}} class="container-md">
                <form>
                    <TextField id="outlined-basic" label="ID" variant="outlined"
                    style={{marginRight: '20px'}} onChange={
                        (event) => setId(event.target.value)
                    }/>

                    <TextField id="outlined-basic" label="Name" variant="outlined"
                    style={{marginRight: '20px'}} onChange={
                        (event) => setName(event.target.value)
                    }/>
                    
                    <TextField id="outlined-basic" label="Capacity" variant="outlined" onChange={
                        (event) => setCapacity(event.target.value)
                    }/>
                </form>
            </div>
            <Button style = {{marginTop: '20px'}} variant="contained" color="success" onClick={updatePlace}> 
                Go
            </Button>
        </>
    )
}

export default UpdatePlace