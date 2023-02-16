import { Grid, Typography } from '@mui/material'
import React from 'react'

interface ILastTournamentTable {
    titles: [string, string, string]
}

const LastTournamentsTable: React.FC<ILastTournamentTable> = (
    props,
): JSX.Element => {
    return (
        <Grid container direction='row' alignItems='center'>
            <Grid item xs={4} textAlign='center'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='2vh'>
                    {props.titles[0]}
                </Typography>
            </Grid>
            <Grid item xs={4} textAlign='center'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='2vh'>
                    {props.titles[1]}
                </Typography>
            </Grid>
            <Grid item xs={4} textAlign='center'>
                <Typography
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='2vh'>
                    {props.titles[2]}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default LastTournamentsTable
