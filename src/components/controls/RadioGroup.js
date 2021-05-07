import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core';
import React from 'react'

export default function RadioGroup(props) {
    const { name, label, value, onChange, items } = props;
    return (
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row={true} name="gender" value={value} onChange={onChange}>
                {
                    items.map((item, index) => (
                        <FormControlLabel value={item.id} control={<Radio />} label={item.title} />
                    ))
                }
            </MuiRadioGroup>
        </FormControl>
    )
}
