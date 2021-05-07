import { makeStyles } from '@material-ui/core';
import React,{useState} from 'react'

export function useForms(initialFValues) {
    const [values,setValues] = useState(initialFValues);

    const handleInputChange=e=>{
        const {name,value}= e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    return {
        values,
        setValues,
        handleInputChange
    }
}



//useStyle is to add custom css style
const useStyle= makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root ':{
            width:'80%',
            margin: theme.spacing(1)
        }
    }
}))
export  function Form(props) {
    const classes = useStyle();
    return (
        <form className={classes.root } autoComplete="off">
            {props.children}
        </form>
    )
}
