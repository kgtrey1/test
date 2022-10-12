import { Grid, Typography } from '@mui/material'
import React from 'react'
import { IUser } from '../../Interfaces/IUser'

const UserProfilePreview: React.FC<IUser> = (props): JSX.Element => {
    return (
        <Grid container direction='column' wrap='nowrap' alignItems='end'>
            <Grid item>
                <Grid
                    container
                    direction='column'
                    width='610px'
                    height='298px'
                    alignItems='start'
                    justifyContent='flex-start'
                    paddingLeft='20px'
                    style={{
                        background: '#1A285B',
                    }}>
                    <Grid item paddingTop='10px'>
                        <Typography
                            color='white'
                            fontWeight='bold'
                            fontSize='25px'>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item paddingTop='10px'>
                        <Typography color='white' fontSize='23px'>
                            {props.username}
                        </Typography>
                    </Grid>
                    <Grid item paddingTop='50px'>
                        <Typography
                            color='white'
                            fontWeight='bold'
                            fontSize='25px'>
                            Bio
                        </Typography>
                    </Grid>
                    <Grid item paddingTop='10px'>
                        <Typography color='white' fontSize='23px'>
                            {props.bio}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UserProfilePreview
