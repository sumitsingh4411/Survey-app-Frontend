import React from 'react'
import { Grid, Paper, TextField, Button, } from '@material-ui/core'


const EditSurvey = () => {

    const paperStyle = { padding: 20, height: '60vh', width: '40%', margin: "20px auto" }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Edit Survey</h2>
                </Grid>
                <TextField label='Survey Question' placeholder='Enter your survey question' fullWidth required />
                <TextField style={{ marginTop: 20 }} label='Enter option 1' placeholder='Enter option no 1' fullWidth required />
                <TextField style={{ marginTop: 20 }} label='Enter option 1' placeholder='Enter option no 1' fullWidth required />
                <TextField style={{ marginTop: 20 }} label='Enter option 1' placeholder='Enter option no 1' fullWidth required />
                <TextField style={{ marginTop: 20 }} label='Enter option 1' placeholder='Enter option no 1' fullWidth required />
                <Button style={{ marginTop: 50 }} type='submit' color='primary' variant="contained" fullWidth>Edit Survey</Button>
            </Paper>
        </Grid>
    )
}

export default EditSurvey;