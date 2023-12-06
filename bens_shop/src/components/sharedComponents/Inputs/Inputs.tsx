import * as _React from 'react';
import { forwardRef } from 'react'; // lets component forms to forward info/data from user
import { TextField } from '@mui/material';

interface inputState {
    name: string,
    placeholder: string
}


export const InputText = forwardRef((props: inputState, ref) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            inputRef={ref} //data coming from user sbmitall will forward to form w/ this input box
            fullWidth
            type = 'text'
            {...props}
        >
        </TextField>
    )
})

export const InputPassword = forwardRef((props: inputState, ref) => {
    return (
        <TextField
            variant='outlined'
            margin='normal'
            inputRef={ref} //data coming from user sbmitall will forward to form w/ this input box
            fullWidth
            type = 'password'
            {...props}
        >
        </TextField>
    )
})