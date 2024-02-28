import DataForm from "../components/NameAndCapForm"
import { TextField, Button } from "@mui/material"
import React, { useState } from 'react';
import axios from '../config/axios.js'

function CreatePlace() {
    const [name, setName] = useState('')
    const [capacity, setCapacity] = useState(1)

    const createPlace = async () => {
        console.log('capacidad con ' + capacity)
        try {
            await axios.post(`${instance.getUri()}/espacios`, {
                Name: name,
                Capacity: parseInt(capacity),
              })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1>Create Place</h1>
            <p>Type the name and the capacity of the place</p>

            <div style={{marginTop: '50px'}} class="container-md">
                <form>
                    <TextField id="outlined-basic" label="Name" variant="outlined"
                    style={{marginRight: '20px'}} onChange={(event) => setName(event.target.value)}/>
                    
                    <TextField id="outlined-basic" label="Capacity" variant="outlined" 
                    onChange={(event) => setCapacity(event.target.value)}/>
                </form>
            </div>
            <Button style = {{marginTop: '20px'}} variant="contained" color="success" onClick={createPlace}> 
                Go
            </Button>
        </>
    )
}

export default CreatePlace