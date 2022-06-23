import { Grid } from '@mui/material'
import { Text } from 'Lib/Texts'
import React from 'react'
import { ReactComponent as DiscordIcon } from 'Assets/icons/discord.svg'
import { ReactComponent as TwitterIcon } from 'Assets/icons/twitter.svg'
import { ReactComponent as InstagramIcon } from 'Assets/icons/instagram.svg'

const FollowUs = (): JSX.Element => {
    const IconButtons = (): JSX.Element => {
        return (
            <Grid container direction='row' wrap='nowrap' spacing='36px'>
                <Grid item display='grid'>
                    <DiscordIcon />
                </Grid>
                <Grid item display='grid'>
                    <InstagramIcon />
                </Grid>
                <Grid item display='grid'>
                    <TwitterIcon />
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid
            container
            direction='column'
            wrap='nowrap'
            spacing='16px'
            alignItems='center'>
            <Grid item display='grid'>
                <Text
                    style={{ fontSize: '25px', whiteSpace: 'nowrap' }}
                    text='Follow us'
                />
            </Grid>
            <Grid item display='grid'>
                <IconButtons />
            </Grid>
        </Grid>
    )
}

export default FollowUs
