import React from 'react'
import { Grid } from '@mui/material'
import GameStatsTitle from './GameStatsTitle'
import GameStatsWinners from './GameStatsWinners'
import GameStatsTable from './GameStatsTable'

const GamesStats: React.FC = (): JSX.Element => {
    return (
        <Grid container direction='column'>
            <Grid item>
                <GameStatsTitle title='Rocket League' />
            </Grid>
            <Grid item>
                <GameStatsWinners
                    winnersList={[
                        {
                            username: 'Faezito',
                            profilePicURL:
                                'https://wallpapers.com/images/hd/cool-profile-pictures-monkey-face-0jxwmq6bpm3hs9cb.jpg',
                        },
                    ]}
                />
            </Grid>
            <Grid item paddingTop='5vh' alignSelf='center' width='80%'>
                <GameStatsTable
                    categories={[
                        'username',
                        'goals',
                        'assists',
                        'clears',
                        'shots',
                    ]}
                    stats={[
                        {
                            wonMatch: true,
                            players: {
                                eriseId: '123',
                                username: 'faezito',
                                stats: {
                                    goals: 3,
                                    assists: 0,
                                    clears: 2,
                                    shots: 9,
                                    centers: 0,
                                    saves: 2,
                                },
                            },
                        },
                        {
                            wonMatch: false,
                            players: {
                                eriseId: '1234',
                                username: 'karima',
                                stats: {
                                    goals: 0,
                                    assists: 0,
                                    clears: 0,
                                    shots: 0,
                                    centers: 0,
                                    saves: 0,
                                },
                            },
                        },
                    ]}
                />
            </Grid>
        </Grid>
    )
}

export default GamesStats
