import { Alert, AlertColor, Snackbar } from '@mui/material'
import * as React from 'react'

interface IMySnackbar {
    isOpen?: boolean
    message?: string
    onClose?: any
    duration?: number
    type?: AlertColor
    width?: any
    vertical?: 'top' | 'bottom'
    horizontal?: 'left' | 'center' | 'right'
}

const MySnackbar = (props: IMySnackbar) => {
    const {
        message,
        isOpen,
        onClose,
        duration,
        type,
        vertical,
        horizontal,
        width,
    } = props

    const color = {
        error: '#FF3100',
        info: '#657273',
        success: 'rgb(91, 185, 193)',
    }

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={duration}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            onClose={(event, reason) => {
                if (reason != 'clickaway') onClose()
            }}>
            <Alert
                onClose={onClose}
                severity={type}
                sx={{
                    width: '100%',
                    backgroundColor: (color as any)?.[type as any],
                    color: '#ffffff',
                    borderRadius: '15px',
                }}>
                <span
                    style={{
                        fontFamily: 'Poppins',
                        letterSpacing: '0px',
                    }}>
                    {message}
                </span>
            </Alert>
        </Snackbar>
    )
}

MySnackbar.defaultProps = {
    type: 'error',
    isOpen: false,
    message: 'Une erreur est survenue',
    duration: 3000,
    vertical: 'bottom',
    horizontal: 'left',
    width: undefined,
    onClose: () => {
        return null
    },
}

export default MySnackbar
