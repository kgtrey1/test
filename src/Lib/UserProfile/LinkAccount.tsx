import { Grid } from '@mui/material'
import React from 'react'
import EpicGamesLogo from 'Assets/icons/epic_games_logo.svg'
import SteamLogo from 'Assets/icons/steam_logo.svg'

const LinkAccount: React.FC = (): JSX.Element => {
    return (
        <Grid container direction='row' columnSpacing='16px'>
            <Grid item>
                <img
                    src={EpicGamesLogo}
                    alt='Epic Games Logo'
                    width='109px'
                    height='106px'
                />
            </Grid>
            <Grid item>
                <img
                    src={SteamLogo}
                    alt='Steam Logo'
                    width='114px'
                    height='92px'
                />
            </Grid>
        </Grid>
    )
}

export default LinkAccount
