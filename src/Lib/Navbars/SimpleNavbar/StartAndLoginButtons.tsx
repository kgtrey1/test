import { Grid } from '@mui/material'
import { GradientBackgroundButton, GradientBorderButton } from 'Lib/Buttons'
import React from 'react'

const StartAndLoginButtons = (): JSX.Element => {
    return (
        <Grid container direction='row' wrap='nowrap' spacing='15px'>
            <Grid item display='grid'>
                <GradientBackgroundButton text='Get started' />
            </Grid>
            <Grid item display='grid'>
                <GradientBorderButton text='Log in' />
            </Grid>
        </Grid>
    )
}

export default StartAndLoginButtons
