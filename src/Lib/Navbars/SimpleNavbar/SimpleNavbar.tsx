import { Grid } from '@mui/material'
import React from 'react'
import './SimpleNavbar.scss'

interface ISimpleNavbar {
    className?: string
    style?: React.CSSProperties
}

const SimpleNavbar: React.FunctionComponent<ISimpleNavbar> = (
    props: ISimpleNavbar,
): JSX.Element => {
    const { className, style } = props

    return (
        <Grid
            container
            direction='row'
            wrap='nowrap'
            className={className}
            style={style}></Grid>
    )
}

SimpleNavbar.defaultProps = {
    className: 'simple-navbar',
    style: undefined,
}

export default SimpleNavbar
