import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

function YourSurvey() {
    const [data, setData] = useState([]);
    const [email, setemail] = useState(null);
    useEffect(() => {
        axios.get('https://surveybackend12.herokuapp.com/api/me', {
            headers: {
                'Authorization': `token ${localStorage.getItem('user')}`
            }
        }).then(res => {
            setemail(res.data.User.email);
        }).catch(err => {
            console.log(err)
        });

        axios.get('https://surveybackend12.herokuapp.com/api/survey', {
            headers: {
                'Authorization': `token ${localStorage.getItem('user')}`
            }
        }).then(res => {
            const arr = res.data;
            const allarr = [];
            arr.map(e => {
                if (e.email === email) {
                    allarr.push(e);
                }
            })
            setData(allarr);
            console.log(allarr)
        }).catch(err => {
            console.log(err)
        });
    }, [email]);
    const MyDelete = (e) => {
        axios.delete('https://surveybackend12.herokuapp.com/api/survey/' + e, {
            headers: {
                'Authorization': `token ${localStorage.getItem('user')}`
            }
        }).then(res => {
            console.log(res);
            window.location.reload(false);
        }).catch(err => {
            console.log(err)
        });

    }
    const paperStyle = { padding: 10, height: '15vh', width: "50%", margin: "20px auto" }
    return (
        <Grid>
            {
                data && data.map((a) => (
                    <>
                        <Paper elevation={10} style={paperStyle}>
                            <Typography style={{ padding: 20 }}>
                                <Typography style={{ fontWeight: 'bolder', color: '#7AD096', display: 'flex' }}>
                                    {a.question}
                                    <Typography style={{ marginLeft: 30 }}>
                                        <Button
                                            style={{ marginLeft: 30 }}
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<DeleteIcon />}
                                            onClick={() => MyDelete(a._id)}
                                        >
                                            Delete
                                        </Button>
                                        <Link to={"/edit/" + a._id}>
                                            <Button style={{ marginLeft: 30 }} variant="contained" color="primary" > Edit </Button>
                                        </Link>
                                    </Typography>
                                </Typography>
                            </Typography>
                        </Paper>
                    </>
                ))


            }

        </Grid>
    )
}

export default YourSurvey
