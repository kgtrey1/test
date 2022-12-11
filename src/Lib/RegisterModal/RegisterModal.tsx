import React from 'react'
import { Box, Grid, Modal, Typography } from '@mui/material'
import { BasicInput } from 'Lib/Inputs'
import { GradientBorderButton } from 'Lib/Buttons'
import { useAppDispatch, useAppSelector } from 'Hooks'
import { register } from 'Reducers/authSlice'
import useReduceEffect from 'Hooks/useReduceEffect'
import { randomModalAnimation } from 'Lib/LoginModal/LoginModal'
import useGenericForm from 'Hooks/useGenericForm'
import { snackbarActions } from 'Reducers/snackbarSlice'

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
        username: '',
        firstname: '',
        lastname: '',
    })

    useReduceEffect(
        (previousValue) => {
            if (previousValue === false) {
                return
            }
            if (error !== undefined) {
                dispatch(
                    snackbarActions.openSnackbar({
                        message: error?.message,
                        type: 'error',
                    }),
                )
            }
            if (success) {
                dispatch(
                    snackbarActions.openSnackbar({
                        message: 'Account created !',
                        type: 'success',
                    }),
                )
                onClose()
            }
        },
        [isLoading, dispatch],
    )

    const handleSubmit = (): void => {
        dispatch(
            register({
                mail: genericForm.fieldValues.email,
                password: genericForm.fieldValues.password,
                username: genericForm.fieldValues.username,
                firstname: genericForm.fieldValues.firstname,
                lastname: genericForm.fieldValues.lastname,
            }),
        )
    }

    return (
        <Grid container>
            <Grid item>
                <Modal
                    open={open}
                    onClose={() => {
                        genericForm.resetAll()
                        onClose()
                    }}>
                    <Box className={`modal ${randomModalAnimation()}`}>
                        <Grid
                            container
                            direction='column'
                            justifyContent='center'
                            alignItems='center'
                            gap='20px'
                            style={{ padding: 50 }}>
                            <Grid item display='grid'>
                                <Typography
                                    color='white'
                                    fontSize='19px'
                                    fontFamily='Roboto-Regular'>
                                    Register
                                </Typography>
                            </Grid>
                            <Grid item display='grid'>
                                <BasicInput
                                    placeholder={'Mail address'}
                                    {...genericForm.generateInputAttributes(
                                        'email',
                                        { isRequired: true, type: 'email' },
                                    )}
                                />
                            </Grid>
                            <Grid item display='grid'>
                                <BasicInput
                                    placeholder={'Password'}
                                    type={'password'}
                                    {...genericForm.generateInputAttributes(
                                        'password',
                                        { isRequired: true, minLength: 8 },
                                    )}
                                />
                            </Grid>
                            <Grid item display='grid'>
                                <BasicInput
                                    placeholder={'Username'}
                                    {...genericForm.generateInputAttributes(
                                        'username',
                                        {
                                            isRequired: true,
                                            minLength: 3,
                                            maxLength: 20,
                                        },
                                    )}
                                />
                            </Grid>
                            <Grid item display='grid'>
                                <BasicInput
                                    placeholder={'Firstname'}
                                    {...genericForm.generateInputAttributes(
                                        'firstname',
                                        {
                                            isRequired: true,
                                            minLength: 2,
                                            maxLength: 20,
                                        },
                                    )}
                                />
                            </Grid>
                            <Grid item display='grid'>
                                <BasicInput
                                    placeholder={'Lastname'}
                                    {...genericForm.generateInputAttributes(
                                        'lastname',
                                        {
                                            isRequired: true,
                                            minLength: 2,
                                            maxLength: 20,
                                        },
                                    )}
                                />
                            </Grid>
                            <Grid item display='grid'>
                                <GradientBorderButton
                                    text='Register'
                                    style={{ marginTop: 25 }}
                                    onClick={() =>
                                        genericForm.submitValues(
                                            () => handleSubmit(),
                                            () => {
                                                return
                                            },
                                        )
                                    }
                                    disabled={isLoading}></GradientBorderButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </Grid>
        </Grid>
    )
}

export default RegisterModal
