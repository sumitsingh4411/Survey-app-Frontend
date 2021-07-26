import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
const ForgotPassword = () => {

    const paperStyle = { padding: 20, height: '20vh', width: 480, margin: "20px auto" }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Form onSubmit={e => { alert('this service is now unavailabe') }}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your Email" required />
                        <Form.Text className="text-muted">
                            { }
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send Otp
                    </Button>
                    <Link to="/">
                        <Button variant="primary" type="submit" style={{ marginLeft: 30 }}>
                            Home
                        </Button>
                    </Link>
                </Form>

            </Paper>
        </Grid>
    )
}

export default ForgotPassword;