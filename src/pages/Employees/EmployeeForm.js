import { Grid} from '@material-ui/core';
import React from 'react'
import {useForms,Form} from '../../components/useForms';
import Controls1 from '../../components/controls/Controls1';



const genderItems=[
    { id: 'male', title:'Male'},
    {id:'female',title:'Female'},
    {id:'others',title:'Others'}
]

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
                    
                    <Controls1.Input name="fullName" label="Full Name" value={values.fullName}
                    onChange={handleInputChange}/>
                    <Controls1.Input variant="outlined" label="Email" name="email" value={values.email} onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                    <Controls1.RadioGroup
                        name="gender"
                        label="Gender"
                         value={values.gender} onChange={handleInputChange}
                         items={genderItems}
                    />
                    
                </Grid>
            </Grid>
        </Form>
        
    )
}
