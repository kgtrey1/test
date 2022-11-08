import React from 'react'
import { Box, Grid, Modal, Alert, Snackbar, Typography } from '@mui/material'
import './LoginModal.scss'
import { BasicInput } from 'Lib/Inputs'
import { GradientBorderButton } from 'Lib/Buttons'
import { useAppDispatch, useAppSelector } from 'Hooks'
import { login } from 'Reducers/authSlice'
import useReduceEffect from 'Hooks/useReduceEffect'
import useGenericForm from 'Hooks/useGenericForm'

interface Props {
    open: boolean
    onClose: () => void
}

export const randomModalAnimation = (): string => {
    const animations = ['modal-left-anim']
    const number: number = Math.floor(Math.random() * animations.length)

    return animations[number]
}

const LoginModal = ({ open, onClose }: Props): JSX.Element => {
    const genericForm = useGenericForm({
        email: '',
        password: '',
    })

    const dispatch = useAppDispatch()
    const { isLoading, error, success } = useAppSelector((app) => app.auth)

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
            login({
                email: genericForm.fieldValues.email,
                password: genericForm.fieldValues.password,
            }),
        )
    }

    return (
        <Grid container>
            <Grid item>
                <Modal open={open} onClose={onClose}>
                    <Box className={`modal ${randomModalAnimation()}`}>
                        <Grid
                            container
                            direction='column'
                            justifyContent='center'
                            alignItems='center'
                            style={{ padding: 50 }}>
                            <Typography
                                color='white'
                                fontSize='19px'
                                fontFamily='Roboto-Regular'>
                                Login
                            </Typography>
                            <BasicInput
                                placeholder={'Mail address'}
                                style={{ marginBlock: 45 }}
                                {...genericForm.generateInputAttributes(
                                    'email',
                                )}
                            />
                            <BasicInput
                                placeholder={'Password'}
                                type={'password'}
                                {...genericForm.generateInputAttributes(
                                    'password',
                                )}
                            />
                            <GradientBorderButton
                                text='Login'
                                style={{ marginTop: 45 }}
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
                <Alert severity='success'>{'You have been logged in'}</Alert>
            </Snackbar>
        </Grid>
    )
}

export default LoginModal
