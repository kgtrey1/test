import { Grid } from '@mui/material'
import React from 'react'
import LastTournamentsTable from './LastTournamentsTable'
import LastTournamentsTitle from './LastTournamentsTitle'
import TableRows from './TableRows'

const LastTournaments: React.FC = (): JSX.Element => {
    return (
        <Grid container direction='column' width='60vw'>
            <Grid item paddingLeft='3.5vw' paddingTop='3vh'>
                <LastTournamentsTitle title='Last tournaments' />
            </Grid>
            <Grid
                item
                width='100%'
                marginTop='3vh'
                paddingTop='1.5vh'
                paddingBottom='1.5vh'
                style={{ background: '#1A285B' }}>
                <LastTournamentsTable titles={['time', 'mode', 'winners']} />
            </Grid>
            <Grid
                item
                width='100%'
                paddingTop='1vh'
                style={{ background: '#1A285B' }}>
                <TableRows
                    lastGames={[
                        {
                            time: '1h',
                            mode: 'solo',
                            winners: 'faez',
                        },
                        {
                            time: '3h',
                            mode: 'trio',
                            winners: 'faez, lexou and karima',
                        },
                        {
                            time: '1 day',
                            mode: 'duo',
                            winners: 'faez and karima',
                        },
                    ]}
                />
            </Grid>
        </Grid>
    )
}

export default LastTournaments
