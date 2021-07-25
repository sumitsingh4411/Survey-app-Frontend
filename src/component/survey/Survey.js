import React from 'react'
import { Grid, Paper, Typography, Button } from '@material-ui/core'


function Survey() {
    const paperStyle = { padding: 10, height: '30vh', width: "40%", margin: "20px auto" }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Typography style={{ padding: 20 }}>
                    <Typography style={{ fontWeight: 'bolder', color: '#7AD096' }}>
                        1. How wourld rate your expericne with our product
                    </Typography>
                    <Typography style={{ marginLeft: 30, marginTop: 10 }}>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }} >1.  satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>2. Not satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>3. neither agree satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>4. yes satisfied</Button>
                        </Typography>
                    </Typography>
                </Typography>
            </Paper>
            <Paper elevation={10} style={paperStyle}>
                <Typography style={{ padding: 20 }}>
                    <Typography style={{ fontWeight: 'bolder', color: '#7AD096' }}>
                        1. How wourld rate your expericne with our product
                    </Typography>
                    <Typography style={{ marginLeft: 30, marginTop: 10 }}>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }} >1.  satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>2. Not satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>3. neither agree satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>4. yes satisfied</Button>
                        </Typography>
                    </Typography>
                </Typography>
            </Paper>
            <Paper elevation={10} style={paperStyle}>
                <Typography style={{ padding: 20 }}>
                    <Typography style={{ fontWeight: 'bolder', color: '#7AD096' }}>
                        1. How wourld rate your expericne with our product
                    </Typography>
                    <Typography style={{ marginLeft: 30, marginTop: 10 }}>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }} >1.  satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>2. Not satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>3. neither agree satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>4. yes satisfied</Button>
                        </Typography>
                    </Typography>
                </Typography>
            </Paper>
            <Paper elevation={10} style={paperStyle}>
                <Typography style={{ padding: 20 }}>
                    <Typography style={{ fontWeight: 'bolder', color: '#7AD096' }}>
                        1. How wourld rate your expericne with our product
                    </Typography>
                    <Typography style={{ marginLeft: 30, marginTop: 10 }}>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }} >1.  satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>2. Not satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>3. neither agree satisfied</Button>
                        </Typography>
                        <Typography>
                            <Button variant="outlined" color="primary" style={{ marginTop: 10 }}>4. yes satisfied</Button>
                        </Typography>
                    </Typography>
                </Typography>
            </Paper>

        </Grid>
    )
}

export default Survey
