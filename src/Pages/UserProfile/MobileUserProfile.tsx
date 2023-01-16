import React from 'react'
import { Grid, Typography } from '@mui/material'
import UserProfilePicture from 'Lib/UserProfile/UserProfilePicture'
import MobileUPBar from 'Lib/UserProfile/MobileUserProfile/MobileUPBar'
import UserProfileSections from 'Lib/UserProfile/UserProfileSections'
import LinkAccount from 'Lib/UserProfile/LinkAccount'
import { useAppSelector } from 'Hooks'

const MobileUserProfile: React.FC = (): JSX.Element => {
    const user = useAppSelector((x) => x.user)

    return (
        <Grid
            container
            direction='column'
            height='100vh'
            width='100vw'
            style={{ background: '#0B1946' }}>
            <Grid item>
                <MobileUPBar navigatePath='/' />
            </Grid>
            <Grid item paddingTop='73px' alignSelf='center'>
                <UserProfilePicture />
            </Grid>
            <Grid item paddingTop='73px' alignSelf='center'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='19px'
                    fontWeight='bold'>
                    {user.user?.username}
                </Typography>
            </Grid>
            <Grid item paddingTop='53.41px' width='100%'>
                <UserProfileSections isMobile={true} />
            </Grid>
            <Grid item paddingTop='80px' alignSelf='center'>
                <LinkAccount
                    epicGamesLogoHeight='80px'
                    epicGamesLogoWidth='80px'
                    steamLogoHeight='80px'
                    steamLogoWidth='80px'
                />
            </Grid>
        </Grid>
    )
}

export default MobileUserProfile
