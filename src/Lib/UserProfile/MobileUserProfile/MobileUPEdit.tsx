import { Grid } from '@mui/material'
import { IUser } from 'Interfaces/IUser'
import React from 'react'
import UserProfilePicture from '../UserProfilePicture'
import MobileUPBar from './MobileUPBar'
import EditPen from 'Assets/icons/edit_pen.svg'
import UserProfileEditSection from '../UserProfileEditSection'

const MobileUPEdit: React.FC<IUser> = (props): JSX.Element => (
    <Grid container direction='column'>
        <Grid item>
            <MobileUPBar navigatePath='/mobileUserProfile' />
        </Grid>
        <Grid item paddingTop='73px' alignSelf='center'>
            <Grid container direction='row' justifyContent='center'>
                <Grid item>
                    <UserProfilePicture />
                </Grid>
                <Grid item>
                    <img src={EditPen} alt='Edit button' />
                </Grid>
            </Grid>
            <Grid item paddingTop='50px' alignSelf='center'>
                <UserProfileEditSection
                    username={props.username}
                    email={props.email}
                    bio={props.bio}
                    nameInputHeight='60px'
                    nameInputWidth='350px'
                    bioInputHeight='100px'
                    bioInputWidth='350px'
                />
            </Grid>
        </Grid>
    </Grid>
)

export default MobileUPEdit
