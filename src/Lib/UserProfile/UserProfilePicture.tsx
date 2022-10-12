import { Grid } from '@mui/material'
import React from 'react'

const UserProfilePicture: React.FC = (): JSX.Element => {
    return (
        <Grid>
            <img
                width='158px'
                height='158px'
                src='https://i.pinimg.com/originals/c7/93/ae/c793ae372886c450d55535211231204e.jpg'
                alt='User Profile Picture'
                style={{ borderRadius: '50px' }}
            />
        </Grid>
    )
}

export default UserProfilePicture
