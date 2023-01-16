import { Grid, Typography } from '@mui/material'
import { GradientBackgroundButton } from 'Lib/Buttons'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'Hooks'
import { updateUser } from 'Reducers/userSlice'
import { snackbarActions } from 'Reducers/snackbarSlice'

interface IUserProfileEditSection {
    nameInputHeight?: string
    nameInputWidth?: string
    bioInputHeight?: string
    bioInputWidth?: string
}

const UserProfileEditSection: React.FC<IUserProfileEditSection> = (
    props,
): JSX.Element => {
    const user = useAppSelector((x) => x.user)
    const dispatch = useAppDispatch()
    const [username, setUsername] = React.useState(user.user?.username)
    const [bio, setBio] = React.useState(user.user?.bio)

    const updateUserInfo = () => {
        dispatch(updateUser({ username: username, bio: bio }))
            .unwrap()
            .then(() => {
                dispatch(
                    snackbarActions.openSnackbar({
                        message: 'Account updated successfully!',
                        type: 'success',
                    }),
                )
            })
            .catch((error) => {
                console.log(error)
                dispatch(
                    snackbarActions.openSnackbar({
                        message: error,
                        type: 'error',
                    }),
                )
            })
    }

    return (
        <Grid container direction='column' justifyContent='start'>
            <Grid item paddingBottom='11px'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='19px'
                    fontWeight='bold'>
                    Edit my name
                </Typography>
            </Grid>
            <Grid
                item
                width={props.nameInputWidth}
                height={props.nameInputHeight}
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
                        outline: 'none',
                        height: props.nameInputHeight,
                        width: props.nameInputWidth,
                        fontSize: '23px',
                        color: 'white',
                    }}></input>
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
            <Grid
                item
                width={props.bioInputWidth}
                height={props.bioInputHeight}
                style={{
                    background: '#1A285B',
                }}>
                <input
                    defaultValue={bio as string}
                    type='text'
                    onChange={(e) => {
                        setBio(e.target.value)
                    }}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        height: props.bioInputHeight,
                        width: props.bioInputWidth,
                        fontSize: '23px',
                        color: 'white',
                        fontFamily: 'Roboto-Regular',
                        resize: 'none',
                    }}></input>
            </Grid>
            <Grid
                item
                paddingTop='55px'
                onClick={() => {
                    updateUserInfo()
                }}>
                <GradientBackgroundButton type='submit' text='Save' />
            </Grid>
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
