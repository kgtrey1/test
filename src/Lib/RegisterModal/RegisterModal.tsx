import React from 'react'
import { Box, Grid, Modal, Alert, Snackbar, Typography } from '@mui/material'
import { BasicInput } from 'Lib/Inputs'
import { GradientBorderButton } from 'Lib/Buttons'
import { useAppDispatch, useAppSelector } from 'Hooks'
import { register } from 'Reducers/authSlice'
import useReduceEffect from 'Hooks/useReduceEffect'
import { randomModalAnimation } from 'Lib/LoginModal/LoginModal'
import useGenericForm from 'Hooks/useGenericForm'

interface Props {
    open: boolean
    onClose: () => void
}

const RegisterModal = ({ open, onClose }: Props): JSX.Element => {
    const dispatch = useAppDispatch()
    const { isLoading, error, success } = useAppSelector((app) => app.auth)

    const genericForm = useGenericForm({
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        firstname: '',
        lastname: '',
        dateOfBirth: new Date(),
    })

    const [isError, setIsError] = React.useState<boolean>(false)
    const [isSuccess, setIsSuccess] = React.useState<boolean>(false)
    const [inputError, setInputError] = React.useState<boolean>(false)

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
        if (
            genericForm.fieldValues.password !==
            genericForm.fieldValues.confirmPassword
        ) {
            setInputError(true)
            return
        }
        dispatch(
            register({
                mail: genericForm.fieldValues.email,
                password: genericForm.fieldValues.password,
                username: genericForm.fieldValues.username,
                firstname: genericForm.fieldValues.firstname,
                lastname: genericForm.fieldValues.lastname,
                dateOfBirth: genericForm.fieldValues.dateOfBirth,
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
                                fontFamily='Roboto-Regular'
                                style={{ marginBlock: 10 }}>
                                Register
                            </Typography>
                            <BasicInput
                                placeholder={'Mail address'}
                                style={{ marginBlock: 10 }}
                                {...genericForm.generateInputAttributes(
                                    'email',
                                )}
                            />
                            <BasicInput
                                placeholder={'Password'}
                                type={'password'}
                                style={{ marginBlock: 10 }}
                                {...genericForm.generateInputAttributes(
                                    'password',
                                )}
                            />
                            <BasicInput
                                placeholder={'Confirm password'}
                                type={'password'}
                                style={{ marginBlock: 10 }}
                                {...genericForm.generateInputAttributes(
                                    'confirmPassword',
                                )}
                            />
                            <BasicInput
                                placeholder={'Username'}
                                style={{ marginBlock: 10 }}
                                {...genericForm.generateInputAttributes(
                                    'username',
                                )}
                            />
                            <BasicInput
                                placeholder={'Firstname'}
                                style={{ marginBlock: 10 }}
                                {...genericForm.generateInputAttributes(
                                    'firstname',
                                )}
                            />
                            <BasicInput
                                placeholder={'Lastname'}
                                style={{ marginBlock: 10 }}
                                {...genericForm.generateInputAttributes(
                                    'lastname',
                                )}
                            />
                            <BasicInput
                                placeholder={'Date of Birth'}
                                type={'date'}
                                style={{ marginBlock: 10, fontSize: '1.6rem' }}
                                {...genericForm.generateInputAttributes(
                                    'dateOfBirth',
                                )}
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
            <Snackbar
                open={inputError}
                autoHideDuration={3000}
                onClose={() => setInputError(false)}>
                <Alert severity='error'>
                    {'Password and confirm password are different'}
                </Alert>
            </Snackbar>
        </Grid>
    )
}

export default RegisterModal
