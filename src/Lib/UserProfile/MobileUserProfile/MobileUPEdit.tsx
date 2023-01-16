import { Grid } from '@mui/material'
import React from 'react'
import UserProfilePicture from '../UserProfilePicture'
import MobileUPBar from './MobileUPBar'
import EditPen from 'Assets/icons/edit_pen.svg'
import UserProfileEditSection from '../UserProfileEditSection'
import { useMediaQuery } from 'react-responsive'
import SimpleUserProfile from 'Pages/UserProfile/SimpleUserProfile'

const MobileUPEdit: React.FC = (): JSX.Element => {
    const isMobileDevice = useMediaQuery({
        query: '(min-device-width: 480px)',
    })
    return (
        <Grid>
            {!isMobileDevice ? (
                <Grid container direction='column'>
                    <Grid item>
                        <MobileUPBar navigatePath='/userProfile' />
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
                                nameInputHeight='60px'
                                nameInputWidth='350px'
                                bioInputHeight='100px'
                                bioInputWidth='350px'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            ) : (
                <SimpleUserProfile />
            )}
        </Grid>
    )
}

export default MobileUPEdit
