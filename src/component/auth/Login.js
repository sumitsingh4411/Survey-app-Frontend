import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = () => {

    const paperStyle = { padding: 20, height: '50vh', width: 380, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Email' placeholder='Enter email' fullWidth required />
                <TextField style={{ marginTop: 20 }} label='Password' placeholder='Enter password' type='password' fullWidth required />
                <Button style={{ marginTop: 30 }} type='submit' color='primary' variant="contained" fullWidth>Sign in</Button>
                <Typography style={{ marginTop: 30 }} >
                    <Link href="/forgot" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography style={{ marginTop: 10 }} > Create an account ?
                    <Link href="/signup" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login