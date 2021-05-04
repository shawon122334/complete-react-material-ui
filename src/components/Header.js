import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles({
    root: {
        backgroundColor:'#fff'
    },
    searchInput: {
        opacity: '0.6',
        padding:  '0px 8px',
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        }
        
    }
})
export default function Header() {
    const classes= useStyle();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid >
                        <InputBase placeholder="Search Topics " className={classes.searchInput} startAdornment={<SearchIcon fontSize="small"/>}>

                        </InputBase>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item >
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationImportantIcon fontSize="small"/>

                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="smalls"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
