import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function NavbarStyle() {


    const myfun = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography variant="h4" style={{ textDecoration: 'none', color: 'white', textUnderlineOffset: 'false' }}>
                        Survey
                    </Typography>
                </Link>
                {localStorage.getItem('user') && (
                    <>
                        <Link to="/add" style={{ textDecoration: 'none' }} >
                            <Typography style={{ textDecoration: 'none', color: 'white', marginLeft: 20 }}>
                                Add-Survey
                            </Typography>
                        </Link>
                        <Link to="/your" style={{ textDecoration: 'none' }}>
                            <Typography style={{ textDecoration: 'none', color: 'white', marginLeft: 10 }}>
                                Survey-List
                            </Typography>
                        </Link>
                    </>
                )
                }
                <Typography style={{ marginLeft: 'auto' }}>
                    {
                        !localStorage.getItem('user') && (
                            <>
                                <Link style={{ textDecoration: 'none' }} to="/signup"> <Button style={{ textDecoration: 'none', color: 'white' }}>Sign up</Button></Link>
                                <Link style={{ textDecoration: 'none' }} to="/login"><Button style={{ textDecoration: 'none', color: 'white' }}>Login</Button></Link>
                            </>
                        )
                    }
                    {
                        localStorage.getItem('user') && (
                            <Link to="/" style={{ textDecoration: 'none' }}><Button onClick={myfun} style={{ textDecoration: 'none', color: 'white' }}>Logout</Button></Link>
                        )
                    }

                </Typography>
            </Toolbar >
        </AppBar >
    )
}

export default NavbarStyle;
