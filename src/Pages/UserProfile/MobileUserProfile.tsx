import React from 'react'
import { Grid, Typography } from '@mui/material'
import { IUser } from 'Interfaces/IUser'
import UserProfilePicture from 'Lib/UserProfile/UserProfilePicture'
import MobileUPBar from 'Lib/UserProfile/MobileUserProfile/MobileUPBar'
import UserProfileSections from 'Lib/UserProfile/UserProfileSections'
import LinkAccount from 'Lib/UserProfile/LinkAccount'

const MobileUserProfile: React.FC<IUser> = (props): JSX.Element => {
    return (
        <Grid
            container
            direction='column'
            height='100vh'
            width='100vw'
            style={{ background: '#0B1946' }}>
            <Grid item>
                <MobileUPBar navigatePath='/userProfile/edit' />
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
                    {props.username}
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
