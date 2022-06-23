import { Grid } from '@mui/material'
import { IconTextButton } from 'Lib/Buttons'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as IconHome } from 'Assets/icons/home.svg'
import { ReactComponent as IconTeam } from 'Assets/icons/team.svg'
import { ReactComponent as IconGames } from 'Assets/icons/games.svg'

const NavigationButtons = (): JSX.Element => {
    const navigate = useNavigate()
    const location = useLocation()

    const getIconColor = (pathName: string) => {
        if (pathName == location.pathname) return '#AA16C0'
        return 'white'
    }

    const getTextColor = (pathName: string) => {
        if (pathName == location.pathname) return '#AA16C0'
        return 'white'
    }

    return (
        <Grid container direction='row' wrap='nowrap' columnSpacing='82px'>
            <Grid item display='grid'>
                <IconTextButton
                    style={{
                        color: getTextColor('/'),
                    }}
                    onClick={() => navigate('/')}
                    text='Home'
                    Icon={<IconHome fill={getIconColor('/')} />}
                />
            </Grid>
            <Grid item display='grid'>
                <IconTextButton
                    style={{
                        color: getTextColor('/team'),
                    }}
                    onClick={() => navigate('/team')}
                    text='Team'
                    Icon={<IconTeam fill={getIconColor('/team')} />}
                />
            </Grid>
            <Grid item display='grid'>
                <IconTextButton
                    style={{
                        color: getTextColor('/games'),
                    }}
                    onClick={() => navigate('/games')}
                    text='Games'
                    Icon={<IconGames fill={getIconColor('/games')} />}
                />
            </Grid>
        </Grid>
    )
}

export default NavigationButtons
