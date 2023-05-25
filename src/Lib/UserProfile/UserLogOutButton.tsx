import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { snackbarActions } from 'Reducers/snackbarSlice'
import { useAppDispatch } from 'Hooks'
import './UserLogOutButton.scss'
import { logout } from 'Reducers/userSlice'

const UserLogOutButton: React.FC = (): JSX.Element => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    return (
        <Grid>
            <button
                className='user-log-out-button'
                onClick={() => {
                    dispatch(logout())
                    navigate('/')
                    dispatch(
                        snackbarActions.openSnackbar({
                            message: 'You have been logged out',
                            type: 'success',
                        }),
                    )
                }}>
                Log out
            </button>
        </Grid>
    )
}

export default UserLogOutButton
