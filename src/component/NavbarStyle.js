import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';


function NavbarStyle() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link href="/">
                    <Typography variant="h5" style={{ textDecoration: 'none', color: 'white' }}>
                        Survey
                    </Typography>
                </Link>
                <Link href="/add">
                    <Typography style={{ textDecoration: 'none', color: 'white', marginLeft:20 }}>
                        Create-Survey
                    </Typography>
                </Link>
                <Link href="/edit">
                    <Typography style={{ textDecoration: 'none', color: 'white', marginLeft:10 }}>
                        Edit-Survey
                    </Typography>
                </Link>
                <Link href="/delete">
                    <Typography style={{ textDecoration: 'none', color: 'white', marginLeft:10 }}>
                        Delete-Survey
                    </Typography>
                </Link>
                <Typography style={{ marginLeft: 'auto' }}>
                    <Link href="/signup"> <Button style={{ textDecoration: 'none', color: 'white' }}>Sign up</Button></Link>
                    <Link href="/login"><Button style={{ textDecoration: 'none', color: 'white' }}>Login</Button></Link>
                    <Link><Button style={{ textDecoration: 'none', color: 'white' }}>Logout</Button></Link>
                </Typography>
            </Toolbar >
        </AppBar >
    )
}

export default NavbarStyle;
