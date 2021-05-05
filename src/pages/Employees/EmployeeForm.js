import { Grid, makeStyles, TextField } from '@material-ui/core';
import { ClassSharp } from '@material-ui/icons';
import React, { useState } from 'react'

//useStyle is to add custom css style
const useStyle= makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root ':{
            width:'80%',
            margin: theme.spacing(1)
        }
    }
}))

const initialFValues={
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate: new Date(),
    isPermanent:false,
}
export default function EmployeeForm() {
    const [values,setValues] = useState(initialFValues);
    const classes = useStyle();

    const handleInputchange=e=>{
        const {name,value}= e.target;
    }
    return (
        <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Full Name" name="fullName" value={values.fullName} onChange={handleInputchange}/>
                    <TextField variant="outlined" label="Email" value={values.email}/>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </form>
    )
}
