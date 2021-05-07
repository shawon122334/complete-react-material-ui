import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import { ClassSharp } from '@material-ui/icons';
import React, { useState } from 'react'
import {useForms,Form} from '../../components/useForms';



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
    const {values,setValues,handleInputChange}=useForms(initialFValues)


    return (
        
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Full Name" name="fullName" value={values.fullName} onChange={handleInputChange}/>
                    <TextField variant="outlined" label="Email" name="email" value={values.email} onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row={true} name="gender" value={values.gender} onChange={handleInputChange}>
                            <FormControlLabel value="male" control={ <Radio/>} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
        
    )
}
