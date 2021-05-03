import { AppBar, Grid, Toolbar } from '@material-ui/core'
import React from 'react'

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item sm={6} style={{border:'1px solid #fff'}}>

                    </Grid>
                    <Grid item sm={6} style={{border:'1px solid #000'}}>

                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
