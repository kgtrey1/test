import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface ITableRows {
    lastGames: Array<{ time: string; mode: string; winners: string }>
}

const TableRows: React.FC<ITableRows> = (props): JSX.Element => {
    const navigate = useNavigate()

    return (
        <Grid container direction='column'>
            {props.lastGames.map((values, key) => (
                <Grid
                    container
                    direction='row'
                    textAlign='center'
                    paddingTop='1vw'
                    paddingBottom='1vw'
                    onClick={() => navigate('/games/rocketleague/123')}
                    sx={{
                        cursor: 'pointer',
                        ':hover': { backgroundColor: '#0B1A4E' },
                        borderTop: '0.1vw solid black',
                    }}
                    key={key}>
                    <Grid item xs={4}>
                        <Typography
                            color='white'
                            fontFamily='Roboto-Regular'
                            fontSize='1.2vw'>
                            {values.time} ago
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            color='white'
                            fontFamily='Roboto-Regular'
                            fontSize='1.2vw'>
                            {values.mode}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            color='white'
                            fontFamily='Roboto-Regular'
                            fontSize='1.2vw'>
                            {values.winners}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default TableRows
