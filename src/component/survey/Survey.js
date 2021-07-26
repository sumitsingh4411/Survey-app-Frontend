import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import axios from 'axios';


function Survey() {
    const [data, setData] = useState(null);
    const [mycolr, setmycolr] = useState(null);
    useEffect(() => {
        axios.get('https://surveybackend12.herokuapp.com/api/survey', {
        }).then(res => {
            setData(res.data);
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        });
    }, [])
    const paperStyle = { padding: 10, height: '30%', width: "60%", margin: "20px auto" }
    const whichbuttom = (e) => {
        setmycolr(e);
    }
    return (
        <Grid>
            {
                data && data.map((a) => (
                    <>
                        <Paper key={a} elevation={10} style={paperStyle}>
                            <Typography style={{ padding: 20 }}>
                                <Typography style={{ fontWeight: 'bolder', color: '#7AD096' }}>
                                    {a.question} ?
                                </Typography>
                                <Typography style={{ marginLeft: 30, marginTop: 10 }}>
                                    {
                                        a.option.split(' ').map((e) => (
                                            <>
                                                <Typography>
                                                    <Button id={e} onClick={() => whichbuttom(e)} variant="outlined" color={mycolr === e ? "secondary" : "primary"} style={{ marginTop: 10 }} >{e}</Button>
                                                </Typography>
                                            </>
                                        ))
                                    }
                                </Typography>
                            </Typography>
                        </Paper>
                    </>
                ))


            }

        </Grid>
    )
}

export default Survey
