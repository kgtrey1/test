import React from 'react'
import { Grid, Typography } from '@mui/material'
import UserProfilePicture from 'Lib/UserProfile/UserProfilePicture'
import MobileUPBar from 'Lib/UserProfile/MobileUserProfile/MobileUPBar'
import UserProfileSections from 'Lib/UserProfile/UserProfileSections'
import LinkAccount from 'Lib/UserProfile/LinkAccount'
import { useAppSelector } from 'Hooks'
import UserLogOutButton from 'Lib/UserProfile/UserLogOutButton'

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
            <Grid item paddingTop='6vh' alignSelf='center'>
                <UserProfilePicture />
            </Grid>
            <Grid item paddingTop='6vh' alignSelf='center'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='5vw'
                    fontWeight='bold'>
                    {user.user?.username}
                </Typography>
            </Grid>
            <Grid item paddingTop='5vh' width='100%'>
                <UserProfileSections isMobile={true} />
            </Grid>
            <Grid item paddingTop='7vh' alignSelf='center'>
                <LinkAccount
                    epicGamesLogoHeight='80vw'
                    epicGamesLogoWidth='80vw'
                    steamLogoHeight='80vw'
                    steamLogoWidth='80vw'
                />
            </Grid>
            <Grid item paddingTop='5vh' alignSelf='center'>
                <UserLogOutButton />
            </Grid>
        </Grid>
    )
}

export default MobileUserProfile
