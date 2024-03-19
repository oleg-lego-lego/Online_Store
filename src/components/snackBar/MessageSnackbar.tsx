import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {setMessageSnackbarAC} from "../store/settings-reducer";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    function Alert(props, ref) {

        return (
            <MuiAlert elevation={24} ref={ref} variant="filled" {...props}/>
        );
    });

export const MessageSnackbar = () => {
    const dispatch = useAppDispatch()
    const message = useAppSelector(state => state.settings.message.message)
    const color = useAppSelector(state => state.settings.message.color)


    const alertSx = {
        width: '100%',
        fontSize: '15px',
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        dispatch(setMessageSnackbarAC(null, color))
    };


    return (
        <Snackbar open={message !== null} autoHideDuration={6000} onClose={handleClose}>
            {color === 'error'
                ?
                <Alert onClose={handleClose} severity={color} sx={alertSx}>
                    {`Error message 😠 ${message}`}
                </Alert>
                :
                <Alert onClose={handleClose} severity={color} sx={alertSx}>
                    {`Сообщение 🙂 ${message}`}
                </Alert>
            }
        </Snackbar>
    );
}
