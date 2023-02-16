import { Grid, Typography } from '@mui/material'
import React from 'react'

interface ITableRows {
    lastGames: Array<{ time: string; mode: string; winners: string }>
}

const TableRows: React.FC<ITableRows> = (props): JSX.Element => {
    return (
        <Grid container direction='column'>
            {props.lastGames.map((values, key) => (
                <Grid
                    container
                    direction='row'
                    textAlign='center'
                    paddingBottom='1.5vh'
                    key={key}>
                    <Grid item xs={4}>
                        <Typography
                            color='white'
                            fontFamily='Roboto-Regular'
                            fontSize='1.8vh'>
                            {values.time}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            color='white'
                            fontFamily='Roboto-Regular'
                            fontSize='1.8vh'>
                            {values.mode}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            color='white'
                            fontFamily='Roboto-Regular'
                            fontSize='1.8vh'>
                            {values.winners}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default TableRows
