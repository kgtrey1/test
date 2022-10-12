import { Grid, Typography } from '@mui/material'
import { IUser } from 'Interfaces/IUser'
import { GradientBackgroundButton } from 'Lib/Buttons'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import axios from 'axios'
import React from 'react'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const UserProfileEditSection: React.FC<IUser> = (): JSX.Element => {
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
                    Name
                </Typography>
            </Grid>
            <Grid>
                <Grid
                    item
                    container
                    direction='column'
                    width='610px'
                    height='84px'
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
                            height: '84px',
                            width: '607px',
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
                    Bio
                </Typography>
            </Grid>
            <Grid>
                <Grid
                    item
                    container
                    direction='column'
                    width='610px'
                    height='195px'
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
                            height: '195px',
                            width: '607px',
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

export default UserProfileEditSection
