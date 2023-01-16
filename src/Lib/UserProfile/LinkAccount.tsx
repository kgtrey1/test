import { Grid } from '@mui/material'
import React from 'react'
import EpicGamesLogo from 'Assets/icons/epic_games_logo.svg'
import SteamLogo from 'Assets/icons/steam_logo.svg'

interface ILinkAccount {
    epicGamesLogoWidth?: string
    epicGamesLogoHeight?: string
    steamLogoWidth?: string
    steamLogoHeight?: string
}

const LinkAccount: React.FC<ILinkAccount> = (props): JSX.Element => {
    return (
        <Grid container direction='row' columnSpacing='16px'>
            <Grid item>
                <img
                    src={EpicGamesLogo}
                    alt='Epic Games Logo'
                    width={props.epicGamesLogoWidth}
                    height={props.epicGamesLogoHeight}
                />
            </Grid>
            <Grid item>
                <img
                    src={SteamLogo}
                    alt='Steam Logo'
                    width={props.steamLogoWidth}
                    height={props.steamLogoHeight}
                />
            </Grid>
        </Grid>
    )
}

LinkAccount.defaultProps = {
    epicGamesLogoWidth: '109px',
    epicGamesLogoHeight: '106px',
    steamLogoWidth: '114px',
    steamLogoHeight: '92px',
}

export default LinkAccount
