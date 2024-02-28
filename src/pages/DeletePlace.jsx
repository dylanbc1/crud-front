import IDForm from "../components/IDForm"
import { TextField, Button } from "@mui/material"
import axios from '../config/axios'
import { useState } from "react"

function DeletePlace() {
    const [id, setId] = useState('')

    const deletePlace = async () => {
        try {
            await axios.delete(`${instance.getUri()}/espacios/${id}`)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1>Delete a place</h1>
            <p>Type the ID of the place you want to be deleted</p>
            
            <div style={{marginTop: '50px'}} class="container-md">
                <form>
                    <TextField id="outlined-basic" label="ID" variant="outlined" onChange={
                        (event) => setId(event.target.value)
                    }></TextField>
                </form>
            </div>
            <Button style = {{marginTop: '20px'}} variant="contained" color="success"
            onClick={deletePlace}> 
                Go
            </Button>
        </>
    )
}

export default DeletePlace