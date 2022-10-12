import React from 'react'
import { Box, Grid, Modal, Alert, Snackbar, Typography } from '@mui/material'
import { BasicInput } from 'Lib/Inputs'
import { GradientBorderButton } from 'Lib/Buttons'
import { useAppDispatch, useAppSelector } from 'Hooks'
import { register } from 'Reducers/authSlice'
import useReduceEffect from 'Hooks/useReduceEffect'

interface Props {
    open: boolean
    onClose: () => void
}

const RegisterModal = ({ open, onClose }: Props): JSX.Element => {
    const dispatch = useAppDispatch()
    const { isLoading, error, success } = useAppSelector((app) => app.auth)

    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [username, setUsername] = React.useState<string>('')
    const [firstname, setFirstname] = React.useState<string>('')
    const [lastname, setLastname] = React.useState<string>('')
    const [isError, setIsError] = React.useState<boolean>(false)
    const [isSuccess, setIsSuccess] = React.useState<boolean>(false)

    useReduceEffect(
        (previousValue) => {
            if (previousValue === false) {
                return
            }
            if (error !== undefined) {
                setIsError(true)
            }
            if (success) {
                setIsSuccess(true)
                onClose()
            }
        },
        [isLoading],
    )

    const handleSubmit = (): void => {
        dispatch(
            register({
                mail: email,
                password: password,
                username: username,
                firstname: firstname,
                lastname: lastname,
            }),
        )
    }

    return (
        <Grid container>
            <Grid item>
                <Modal open={open} onClose={onClose}>
                    <Box className='modal'>
                        <Grid
                            container
                            direction='column'
                            justifyContent='center'
                            alignItems='center'
                            style={{ padding: 50 }}>
                            <Typography
                                color='white'
                                fontSize='19px'
                                fontFamily='Roboto-Regular'
                                style={{ marginBlock: 10 }}>
                                Register
                            </Typography>
                            <BasicInput
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={'Mail address'}
                                style={{ marginBlock: 10 }}
                            />
                            <BasicInput
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={'Password'}
                                type={'password'}
                                style={{ marginBlock: 10 }}
                            />
                            <BasicInput
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder={'Username'}
                                style={{ marginBlock: 10 }}
                            />
                            <BasicInput
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                placeholder={'Firstname'}
                                style={{ marginBlock: 10 }}
                            />
                            <BasicInput
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder={'Lastname'}
                                style={{ marginBlock: 10 }}
                            />
                            <GradientBorderButton
                                text='Register'
                                style={{ marginTop: 25 }}
                                onClick={handleSubmit}
                                disabled={isLoading}></GradientBorderButton>
                        </Grid>
                    </Box>
                </Modal>
            </Grid>
            <Snackbar
                open={isError}
                autoHideDuration={3000}
                onClose={() => setIsError(false)}>
                <Alert severity='error'>{error?.message}</Alert>
            </Snackbar>
            <Snackbar
                open={isSuccess}
                autoHideDuration={3000}
                onClose={() => setIsSuccess(false)}>
                <Alert severity='success'>{'Account created!'}</Alert>
            </Snackbar>
        </Grid>
    )
}

export default RegisterModal
