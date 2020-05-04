import React from 'react';
import { Link, Typography } from '@material-ui/core'

function Copyright() {
    return (
        <>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/bchekuri">
                    BChekuri
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
    );
}


export default Copyright;