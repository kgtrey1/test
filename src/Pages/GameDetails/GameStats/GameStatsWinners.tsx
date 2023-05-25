import React from 'react'
import { Grid, Typography } from '@mui/material'
import UserCard from './UserCard'

interface IGameStatsWinners {
    winnersList: Array<{ username: string; profilePicURL: string }>
}

const GameStatsWinners: React.FC<IGameStatsWinners> = (props): JSX.Element => {
    return (
        <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            paddingTop='5vh'>
            <Grid item>
                <Typography
                    align='justify'
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='2vw'>
                    {props.winnersList.length === 1
                        ? 'The winner is'
                        : 'The winners are'}
                </Typography>
            </Grid>
            <Grid item paddingTop='5vh'>
                <Grid
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing='2vw'>
                    {props.winnersList.map((value, key) => (
                        <Grid item key={key}>
                            <UserCard
                                username={value.username}
                                profilePicURL={value.profilePicURL}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default GameStatsWinners
