import { Grid } from '@mui/material'
import React from 'react'
import './IconTextButton.scss'

interface IIconTextButton {
    Icon: JSX.Element
    text: string
    className?: string
    style?: React.CSSProperties
    onClick?: () => void
}

const IconTextButton: React.FunctionComponent<IIconTextButton> = (
    props: IIconTextButton,
): JSX.Element => {
    const { className, style, text, Icon, onClick } = props

    return (
        <Grid
            onClick={onClick}
            container
            direction='row'
            wrap='nowrap'
            columnSpacing='9px'
            className={className}
            style={style}>
            <Grid item display='grid'>
                {Icon}
            </Grid>
            <Grid item display='grid'>
                {text}
            </Grid>
        </Grid>
    )
}

IconTextButton.defaultProps = {
    onClick: () => {
        return
    },
    className: 'icon-text-button',
    style: undefined,
}

export default IconTextButton
