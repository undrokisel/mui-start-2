import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export const Notification = ({ isSnackOpen, handleSnackClose }) => {
    return (
        <Snackbar
            open={isSnackOpen}
            onClose={handleSnackClose}
            autoHideDuration={2000}
        >
            <Alert onClose={handleSnackClose}
                variant="filled"
                severity="info" sx={{ width: '100%' }}>
                Заказ оформлен
            </Alert>
        </Snackbar>

    )
}
