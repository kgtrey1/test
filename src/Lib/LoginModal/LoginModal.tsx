import React from 'react'
import { Box, Grid, Modal, Typography } from '@mui/material'
import './LoginModal.scss'
import { BasicInput } from 'Lib/Inputs'
import { GradientBorderButton } from 'Lib/Buttons'
import { useAppDispatch, useAppSelector } from 'Hooks'
import { login } from 'Reducers/authSlice'
import useGenericForm from 'Hooks/useGenericForm'
import { snackbarActions } from 'Reducers/snackbarSlice'
import { getUser } from 'Reducers/userSlice'

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
        mail: '',
        password: '',
    })

    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector((app) => app.auth)

    const handleSubmit = (): void => {
        dispatch(
            login({
                mail: genericForm.fieldValues.mail,
                password: genericForm.fieldValues.password,
            }),
        )
            .unwrap()
            .then(() => {
                dispatch(getUser())
                dispatch(
                    snackbarActions.openSnackbar({
                        message: 'You have been logged in',
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
                            wrap='nowrap'
                            gap='20px'
                            style={{ padding: 50 }}>
                            <Grid item display='grid'>
                                <Typography
                                    color='white'
                                    fontSize='19px'
                                    fontFamily='Roboto-Regular'>
                                    Login
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
                                        {
                                            isRequired: true,
                                            minLength: 4,
                                            maxLength: 20,
                                        },
                                    )}
                                />
                            </Grid>
                            <Grid item display='grid'>
                                <GradientBorderButton
                                    text='Login'
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

export default LoginModal
