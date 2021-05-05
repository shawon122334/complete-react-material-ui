import { Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react'
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

    return (
        <form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Full Name" value={values.fullName}/>
                    <TextField variant="outlined" label="Email" value={values.email}/>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </form>
    )
}
