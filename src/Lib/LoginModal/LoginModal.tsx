import React from 'react'
import { Box, Grid, Modal, Alert, Snackbar } from '@mui/material'
import './LoginModal.scss'
import { BasicInput } from 'Lib/Inputs'
import { GradientBorderButton } from 'Lib/Buttons'
import { useAppDispatch, useAppSelector } from 'Hooks'
import { login } from 'Reducers/authSlice'
import useReduceEffect from 'Hooks/useReduceEffect'

interface Props {
    open: boolean
    onClose: () => void
}

const LoginModal = ({ open, onClose }: Props): JSX.Element => {
    const dispatch = useAppDispatch()
    const { isLoading, error } = useAppSelector((app) => app.auth)

    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [isError, setIsError] = React.useState<boolean>(false)

    useReduceEffect(
        (previousValue) => {
            if (previousValue === false) {
                return
            }
            if (error !== undefined) {
                setIsError(true)
            }
        },
        [isLoading],
    )

    const handleSubmit = (): void => {
        dispatch(login({ email: email, password: password }))
    }

    return (
        <>
            <Modal open={open} onClose={onClose}>
                <Box className='modal'>
                    <Grid
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        style={{ padding: 50 }}>
                        <BasicInput
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={'Mail address'}
                            style={{ marginBlock: 45 }}
                        />
                        <BasicInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={'Password'}
                            type={'password'}
                        />
                        <GradientBorderButton
                            text='Login'
                            style={{ marginTop: 45 }}
                            onClick={handleSubmit}
                            disabled={isLoading}></GradientBorderButton>
                    </Grid>
                </Box>
            </Modal>
            <Snackbar
                open={isError}
                autoHideDuration={3000}
                onClose={() => setIsError(false)}>
                <Alert severity='error'>{error?.message}</Alert>
            </Snackbar>
        </>
    )
}

export default LoginModal
