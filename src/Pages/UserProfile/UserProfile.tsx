import React from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileUserProfile from './MobileUserProfile'
import { Grid } from '@mui/material'
import SimpleUserProfile from './SimpleUserProfile'

const UserProfile: React.FC = (): JSX.Element => {
    const isMobileDevice = useMediaQuery({
        query: '(min-device-width: 480px)',
    })

    return (
        <Grid>
            {!isMobileDevice ? <MobileUserProfile /> : <SimpleUserProfile />}
        </Grid>
    )
}

export default UserProfile
