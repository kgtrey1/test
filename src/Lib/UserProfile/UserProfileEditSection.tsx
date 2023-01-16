import { Grid, Typography } from '@mui/material'
import { IUser } from 'Interfaces/IUser'
import { GradientBackgroundButton } from 'Lib/Buttons'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import axios from 'axios'
import React from 'react'

interface IUserProfileEditSection extends IUser {
    nameInputHeight?: string
    nameInputWidth?: string
    bioInputHeight?: string
    bioInputWidth?: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const UserProfileEditSection: React.FC<IUserProfileEditSection> = (
    props,
): JSX.Element => {
    const [open, setOpen] = React.useState(false)
    const [snackbarText, setSnackBarText] = React.useState(
        'Account updated successfully!',
    )
    const [snackBarColor, setSnackBarColor] = React.useState('success')
    const [username, setUsername] = React.useState('Faez')
    const [bio, setBio] = React.useState('Je suis un gamer')

    const updateUserInfo = (
        newUsername: string,
        newFirstname: string,
        newLastname: string,
    ) => {
        console.log('SAVED PRESSED')
        axios
            .put(
                'https://staging-api.erise.gg/user/63346243725d5718ce17f94d',
                {
                    username: newUsername,
                    firstname: newFirstname,
                    lastname: newLastname,
                },
                {
                    headers: {
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImthZGVyaXRvIiwiaWF0IjoxNjYzNjk3MjI1LCJleHAiOjE2NjM5NTY0MjV9.amGeRUa-Fg_TBdajWxBzbDi9DitDMXesSGmoeIhsXHE',
                    },
                },
            )
            .then(function (response) {
                console.log(response.status)
                if (response.status === 200) {
                    setSnackBarText('Account updated successfully!')
                    setSnackBarColor('success')
                } else {
                    setSnackBarText('Oups something went wrong!')
                    setSnackBarColor('error')
                }
                setOpen(true)
                return response.status
            })
            .catch(function (error) {
                console.log(error)
                return 500
            })
    }

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <Grid container direction='column' wrap='nowrap'>
            <Grid item paddingBottom='11px'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='19px'
                    fontWeight='bold'>
                    Edit my name
                </Typography>
            </Grid>
            <Grid>
                <Grid
                    item
                    container
                    direction='column'
                    width={props.nameInputWidth}
                    height={props.nameInputHeight}
                    alignItems='start'
                    justifyContent='center'
                    style={{
                        background: '#1A285B',
                    }}>
                    <input
                        defaultValue={username}
                        type='text'
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            height: props.nameInputHeight,
                            width: props.nameInputWidth,
                            fontSize: '23px',
                            color: 'white',
                        }}></input>
                </Grid>
            </Grid>
            <Grid item paddingBottom='14px' paddingTop='28px'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='19px'
                    fontWeight='bold'>
                    Edit my bio
                </Typography>
            </Grid>
            <Grid>
                <Grid
                    item
                    container
                    direction='column'
                    width={props.bioInputWidth}
                    height={props.bioInputHeight}
                    alignItems='start'
                    justifyContent='center'
                    style={{
                        background: '#1A285B',
                    }}>
                    <input
                        defaultValue={bio}
                        type='text'
                        onChange={(e) => {
                            setBio(e.target.value)
                        }}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            height: props.bioInputHeight,
                            width: props.bioInputWidth,
                            fontSize: '23px',
                            color: 'white',
                        }}></input>
                </Grid>
            </Grid>
            <Grid
                item
                paddingTop='55px'
                onClick={() => {
                    console.log('SAVE HAS BEEN PRESSED')
                    updateUserInfo(username, 'Faez le bg', 'Dhuny')
                }}>
                <GradientBackgroundButton type='submit' text='Save' />
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={snackBarColor === 'success' ? 'success' : 'error'}
                    sx={{ width: '100%' }}>
                    {snackbarText}
                </Alert>
            </Snackbar>
        </Grid>
    )
}

UserProfileEditSection.defaultProps = {
    nameInputHeight: '84px',
    nameInputWidth: '610px',
    bioInputHeight: '195px',
    bioInputWidth: '610px',
}

export default UserProfileEditSection
