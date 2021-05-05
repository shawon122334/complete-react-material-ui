import React from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

export default function Employees() {
    return (
        <div>
            <PageHeader title="New Employee" subTitle="Form Design With Validations" icon={<PeopleOutlineIcon fontSize="large"/>}/>
            <EmployeeForm/>
        </div>
    )
}
