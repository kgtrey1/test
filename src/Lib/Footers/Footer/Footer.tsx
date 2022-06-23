import { Grid } from '@mui/material'
import EriseLogo from './EriseLogo'
import React from 'react'
import './Footer.scss'
import FollowUs from './FollowUs'
import Newsletter from './Newsletter'

interface IFooter {
    className?: string
    style?: React.CSSProperties
}

const Footer: React.FunctionComponent<IFooter> = (
    props: IFooter,
): JSX.Element => {
    const { className, style } = props

    return (
        <Grid
            container
            direction='row'
            wrap='nowrap'
            justifyContent='space-between'
            spacing='80px'
            alignItems='center'
            className={className}
            style={style}>
            <Grid item display='grid'>
                <EriseLogo />
            </Grid>
            <Grid item display='grid'>
                <Newsletter />
            </Grid>
            <Grid item display='grid'>
                <FollowUs />
            </Grid>
        </Grid>
    )
}

Footer.defaultProps = {
    className: 'footer',
    style: undefined,
}

export default Footer
