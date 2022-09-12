import { Grid, Typography } from '@mui/material'
import { IUser } from 'Interfaces/IUser'
import { GradientBackgroundButton } from 'Lib/Buttons'
import React from 'react'

const UserProfileEditSection: React.FC<IUser> = (props): JSX.Element => {
    return (
        <Grid container direction='column' wrap='nowrap'>
            <Grid item paddingBottom='11px'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='19px'
                    fontWeight='bold'>
                    Name
                </Typography>
            </Grid>
            <Grid>
                <Grid
                    item
                    container
                    direction='column'
                    width='610px'
                    height='84px'
                    alignItems='start'
                    justifyContent='center'
                    style={{
                        background: '#1A285B',
                    }}>
                    <input
                        type='text'
                        style={{
                            background: 'transparent',
                            border: 'none',
                            height: '84px',
                            width: '607px',
                            fontSize: '23px',
                            color: 'white',
                        }}></input>
                </Grid>
            </Grid>
            <Grid item paddingBottom='14px' paddingTop='28px'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='19px'
                    fontWeight='bold'>
                    Bio
                </Typography>
            </Grid>
            <Grid>
                <Grid
                    item
                    container
                    direction='column'
                    width='610px'
                    height='195px'
                    alignItems='start'
                    justifyContent='center'
                    style={{
                        background: '#1A285B',
                    }}>
                    <input
                        type='text'
                        style={{
                            background: 'transparent',
                            border: 'none',
                            height: '195px',
                            width: '607px',
                            fontSize: '23px',
                            color: 'white',
                        }}></input>
                </Grid>
            </Grid>
            <Grid item paddingTop='55px'>
                <GradientBackgroundButton text='Save' />
            </Grid>
        </Grid>
    )
}

export default UserProfileEditSection
