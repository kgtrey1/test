import { Grid } from '@mui/material'
import { Page } from 'Lib/Pages'
import React from 'react'
import TeamCard, { ITeamCard } from './TeamCard'

interface ITeam {
    teams: Array<ITeamCard>
}

const Team: React.FunctionComponent<ITeam> = (props): JSX.Element => {
    return (
        <Page>
            <Grid container direction='row'>
                {props.teams.map((value, key) => (
                    <Grid item xs={3} paddingBottom='8vh' key={key}>
                        <TeamCard
                            name={value.name}
                            description={value.description}
                            pictureURL={value.pictureURL}
                        />
                    </Grid>
                ))}
            </Grid>
        </Page>
    )
}

export default Team
