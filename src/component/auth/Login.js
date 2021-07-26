import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, Typography, CircularProgress } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom'

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    const [status, setstatus] = useState(false);
    const [errorstatus, seterrorstatus] = useState(false);
    const [error, seterror] = useState(null);
    const [start, setstart] = useState(false);
    useEffect(() => {
        const timeId = setTimeout(() => {
            seterrorstatus(false)
        }, 3000)

        return () => {
            clearTimeout(timeId)
        }
    }, [errorstatus]);
    const paperStyle = { padding: 20, height: '55vh', width: 500, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const submit = (e) => {
        setstart(true);
        e.preventDefault();

        const mydata = { "email": data.email, "password": data.password };
        const url = 'https://surveybackend12.herokuapp.com/api/login';
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: mydata,
            url,
        };
        axios(options).then(res => {
            console.log(res);
            localStorage.setItem('user', res.data.refresh_toekn);
            setstatus(true);
            window.location.reload(false);
        }).catch(err => {
            seterrorstatus(true);
            seterror(err.response.data.message)
        });
        setstart(false);

    }
    const handle = (e) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Form onSubmit={e => { submit(e) }}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your Email" required onChange={e => handle(e)} id="email" value={data.email} />
                        <Form.Text className="text-muted">
                            { }
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" required onChange={e => handle(e)} id="password" value={data.password} />
                        <Form.Text className="text-muted">
                            { }
                        </Form.Text>
                    </Form.Group>


                    {
                        start === true ? <CircularProgress />
                            :
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                    }
                </Form>
                <Typography style={{ marginTop: 30 }} >
                    <Link to="/forgot" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography style={{ marginTop: 10 }} > Create an account ?
                    <Link to="/signup" >
                        Sign up
                    </Link>
                </Typography>
                {
                    status && (
                        <Redirect to='/' />
                    )
                }
                {
                    errorstatus && (
                        <Alert variant="danger">{error}</Alert>
                    )
                }
            </Paper>
        </Grid>
    )
}

export default Login