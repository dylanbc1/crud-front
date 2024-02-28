import { TextField, Button } from "@mui/material"

function DataForm () {
    return (
        <>
            <div style={{marginTop: '50px'}} class="container-md">
                <form>
                    <TextField id="outlined-basic" label="Name" variant="outlined"
                    style={{marginRight: '20px'}} />
                    
                    <TextField id="outlined-basic" label="Capacity" variant="outlined" />
                </form>
            </div>
            <Button style = {{marginTop: '20px'}} variant="contained" color="success"> 
                Go
            </Button>
        </>
    )
}

export default DataForm