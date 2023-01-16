import React from 'react'
import { Box, Grid, Modal, Typography } from '@mui/material'
import { BasicInput } from 'Lib/Inputs'
import { GradientBorderButton } from 'Lib/Buttons'
import { useAppDispatch, useAppSelector } from 'Hooks'
import { register } from 'Reducers/authSlice'
import { randomModalAnimation } from 'Lib/LoginModal/LoginModal'
import useGenericForm from 'Hooks/useGenericForm'
import { snackbarActions } from 'Reducers/snackbarSlice'
import { getUser } from 'Reducers/userSlice'

interface Props {
    open: boolean
    onClose: () => void
}

const RegisterModal = ({ open, onClose }: Props): JSX.Element => {
    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector((app) => app.auth)

    const genericForm = useGenericForm({
        mail: '',
        password: '',
        confirmPassword: '',
        username: '',
        firstname: '',
        lastname: '',
    })

    const handleSubmit = (): void => {
        dispatch(
            register({
                mail: genericForm.fieldValues.mail,
                password: genericForm.fieldValues.password,
                username: genericForm.fieldValues.username,
                firstname: genericForm.fieldValues.firstname,
                lastname: genericForm.fieldValues.lastname,
            }),
        )
            .unwrap()
            .then(() => {
                dispatch(getUser())
                dispatch(
                    snackbarActions.openSnackbar({
                        message: 'Account created !',
                        type: 'success',
                    }),
                )
                onClose()
            })
            .catch((err) => {
                console.log(err)
                dispatch(
                    snackbarActions.openSnackbar({
                        message: err,
                        type: 'error',
                    }),
                )
            })
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
                                        'mail',
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
                                    placeholder={'Confirm password'}
                                    type={'password'}
                                    {...genericForm.generateInputAttributes(
                                        'confirmPassword',
                                        {
                                            isRequired: true,
                                            minLength: 8,
                                            similarity: [
                                                genericForm.fieldValues
                                                    .password,
                                                genericForm.fieldValues
                                                    .confirmPassword,
                                            ],
                                        },
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
