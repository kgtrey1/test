import { Grid, Typography } from '@mui/material'
import React from 'react'

interface IUserCard {
    username: string
    profilePicURL: string
}

const UserCard: React.FC<IUserCard> = (props): JSX.Element => {
    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'>
            <Grid item>
                <img
                    height='200vh'
                    width='200vw'
                    alt='User Profile Picture'
                    src={props.profilePicURL}
                    style={{ borderRadius: '2vw' }}
                />
            </Grid>
            <Grid item>
                <Typography
                    align='justify'
                    color='gold'
                    fontFamily='Roboto-Regular'
                    fontSize='1.8vw'>
                    {props.username}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default UserCard
