import { Grid, Typography } from '@mui/material'
import { GradientBackgroundButton } from 'Lib/Buttons'
import React from 'react'

export interface ITeamCard {
    name: string
    description: string
    pictureURL: string
}

const TeamCard: React.FC<ITeamCard> = (props): JSX.Element => {
    return (
        <Grid
            container
            height='40vh'
            width='17vw'
            direction='column'
            alignItems='center'
            justifyContent='center'>
            <Grid item>
                <img
                    width='250vw'
                    height='200vh'
                    src={props.pictureURL}
                    style={{ borderRadius: '1vw' }}
                />
            </Grid>
            <Grid item>
                <Typography
                    fontFamily='Roboto-Regular'
                    fontSize='1.2vw'
                    color='white'
                    paddingTop='3vh'>
                    {props.name}
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    fontFamily='Roboto-Regular'
                    fontSize='0.8vw'
                    align='center'
                    color='white'
                    paddingTop='1.5vh'>
                    {props.description}
                </Typography>
            </Grid>
            <Grid item paddingTop='2.5vh'>
                <GradientBackgroundButton text={'See more'} />
            </Grid>
        </Grid>
    )
}

export default TeamCard
