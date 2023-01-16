import React from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import IconTextButton from 'Lib/Buttons/IconTextButton/IconTextButton'
import { ReactComponent as IconBack } from 'Assets/icons/back_arrow_left.svg'

interface IMobileUPBar {
    navigatePath: string
}

const MobileUPBar: React.FC<IMobileUPBar> = (props): JSX.Element => {
    const navigate = useNavigate()

    return (
        <Grid container direction='row' justifyContent='space-between'>
            <Grid item paddingTop='2vh' paddingLeft='2vw'>
                <IconTextButton
                    Icon={<IconBack />}
                    text='Back'
                    onClick={() => navigate(props.navigatePath)}
                />
            </Grid>
            <Grid item paddingTop='2vh' paddingRight='5vw'>
                <img
                    width='150px'
                    height='50px'
                    src={require('./../../../Assets/illustrations/eriseLogo.png')}
                    alt='erise logo'
                />
            </Grid>
        </Grid>
    )
}

export default MobileUPBar
