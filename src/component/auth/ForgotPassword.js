import React from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'


const ForgotPassword = () => {

    const paperStyle = { padding: 20, height: '20vh', width: 280, margin: "20px auto" }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <TextField label='Email' placeholder='Enter Your email' fullWidth required />
                <Button style={{ marginTop: 30 }} type='submit' color='primary' variant="contained" fullWidth>Forgot password</Button>
            </Paper>
        </Grid>
    )
}

export default ForgotPassword;