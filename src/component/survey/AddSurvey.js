import React, { useEffect, useState } from 'react'
import { Grid, Paper, CircularProgress } from '@material-ui/core'
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const AddSurvey = () => {
    const [data, setData] = useState({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
    });
    const [status, setstatus] = useState(false);
    const [errorstatus, seterrorstatus] = useState(false);
    const [error, seterror] = useState(null);
    const [start, setstart] = useState(false);
    const [email, setemail] = useState(null);
    useEffect(() => {
        const timeId = setTimeout(() => {
            seterrorstatus(false);
            setstatus(false);
        }, 3000)

        return () => {
            clearTimeout(timeId)
        }
    }, [errorstatus, status]);
    useEffect(() => {
        axios.get('https://surveybackend12.herokuapp.com/api/me', {
            headers: {
                'Authorization': `token ${localStorage.getItem('user')}`
            }
        }).then(res => {
            console.log(res.data.User.email);
            setemail(res.data.User.email);
        }).catch(err => {
            console.log(err)
        });
    }, [])
    const paperStyle = { padding: 20, height: '70vh', width: "60vw", margin: "20px auto" }
    const submit = async (e) => {
        setstart(true);
        e.preventDefault();
        const option = data.option1+" "+data.option2+" "+data.option3+" "+data.option4;
        const mydata = { "email": email, "question": data.question, "option": option };
        console.log(mydata);
        const url = 'https://surveybackend12.herokuapp.com/api/survey';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `token ${localStorage.getItem('user')}`
            },
            data: mydata,
            url,
        };
        axios(options).then(res => {
            console.log(res);
            setstatus(true);
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
                    <h2>Add Survey</h2>
                </Grid>
                <Form onSubmit={e => { submit(e) }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Survey Question</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Question" required onChange={e => handle(e)} id="question" value={data.question} />
                        <Form.Text className="text-muted">
                            { }
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{ marginTop: 40 }}>
                        <Form.Label>Enter Option NO.1</Form.Label>
                        <Form.Control type="text" placeholder="Enter Option 1" required onChange={e => handle(e)} id="option1" value={data.option1} />
                        <Form.Text className="text-muted">
                            { }
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Option NO.2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Option 2" required onChange={e => handle(e)} id="option2" value={data.option2} />
                        <Form.Text className="text-muted">
                            { }
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Option NO.3</Form.Label>
                        <Form.Control type="text" placeholder="Enter Option 3" required onChange={e => handle(e)} id="option3" value={data.option3} />
                        <Form.Text className="text-muted">
                            { }
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Option NO.4</Form.Label>
                        <Form.Control type="text" placeholder="Enter Option 4" required onChange={e => handle(e)} id="option4" value={data.option4} />
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
                {
                    status && (
                        <Alert style={{ marginTop: 10 }} variant="success">"Survey added successfully"</Alert>
                    )
                }
                {
                    errorstatus && (
                        <Alert style={{ marginTop: 10 }} variant="danger">{error}</Alert>
                    )
                }
            </Paper>
        </Grid>
    )
}

export default AddSurvey;