import React from 'react'
import { IUser } from '../../Interfaces/IUser'
import { useMediaQuery } from 'react-responsive'
import MobileUserProfile from './MobileUserProfile'
import { Grid } from '@mui/material'
import SimpleUserProfile from './SimpleUserProfile'

const UserProfile: React.FC<IUser> = (props): JSX.Element => {
    const isMobileDevice = useMediaQuery({
        query: '(min-device-width: 480px)',
    })

    return (
        <Grid>
            {!isMobileDevice ? (
                <MobileUserProfile
                    username={props.username}
                    email={props.email}
                    bio={props.bio}
                />
            ) : (
                <SimpleUserProfile
                    username={props.username}
                    email={props.email}
                    bio={props.bio}
                />
            )}
        </Grid>
    )
}

export default UserProfile
