import { Grid } from '@mui/material'
import { GradientBackgroundButton, GradientBorderButton } from 'Lib/Buttons'
import React from 'react'
import { LoginModal } from 'Lib/LoginModal'

const StartAndLoginButtons = (): JSX.Element => {
    const [loginModal, setLoginModal] = React.useState(false)

    return (
        <Grid container direction='row' wrap='nowrap' spacing='15px'>
            <Grid item display='grid'>
                <GradientBackgroundButton text='Get started' />
            </Grid>
            <Grid item display='grid'>
                <GradientBorderButton
                    text='Log in'
                    onClick={() => setLoginModal(true)}
                />
                <LoginModal
                    open={loginModal}
                    onClose={() => setLoginModal(false)}
                />
            </Grid>
        </Grid>
    )
}

export default StartAndLoginButtons
