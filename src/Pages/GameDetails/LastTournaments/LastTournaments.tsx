import { Grid } from '@mui/material'
import React from 'react'
import LastTournamentsTable from './LastTournamentsTable'
import LastTournamentsTitle from './LastTournamentsTitle'
import TableRows from './TableRows'

const LastTournaments: React.FC = (): JSX.Element => {
    return (
        <Grid container direction='column' width='60vw'>
            <Grid item paddingLeft='3.5vw' paddingTop='1.5vw'>
                <LastTournamentsTitle title='Last tournaments' />
            </Grid>
            <Grid
                item
                width='100%'
                marginTop='1.5vw'
                paddingTop='1vw'
                style={{ background: '#1A285B' }}>
                <LastTournamentsTable titles={['Time', 'Mode', 'Winners']} />
            </Grid>
            <Grid
                item
                width='100%'
                paddingTop='0.8vw'
                style={{ background: '#1A285B' }}>
                <TableRows
                    lastGames={[
                        {
                            time: '1h',
                            mode: '1v1',
                            winners: 'faez',
                        },
                        {
                            time: '3h',
                            mode: '3v3',
                            winners: 'faez, lexou and karima',
                        },
                        {
                            time: '1 day',
                            mode: '2v2',
                            winners: 'faez and karima',
                        },
                    ]}
                />
            </Grid>
        </Grid>
    )
}

export default LastTournaments
