import React from 'react'
import { Grid } from '@mui/material'
import BasicInput, { IBasicInput } from '../BasicInput/BasicInput'
import { ReactComponent as IconSearch } from 'Assets/icons/search.svg'
import { ReactComponent as IconFilter } from 'Assets/icons/filter.svg'
import './InputWithIcons.scss'

interface IInputWithIcons {
    basicInputProps?: IBasicInput
    className?: string
    style?: React.CSSProperties
}

const InputWithIcons: React.FunctionComponent<IInputWithIcons> = (
    props: IInputWithIcons,
): JSX.Element => {
    const { basicInputProps, className, style } = props

    return (
        <Grid
            container
            direction='row'
            alignItems='center'
            spacing='5px'
            wrap='nowrap'
            className={className}
            style={style}>
            <Grid item display='grid'>
                <IconSearch />
            </Grid>
            <Grid item xs display='grid'>
                <BasicInput
                    style={{
                        backgroundColor: 'transparent',
                    }}
                    {...basicInputProps}
                />
            </Grid>
            <Grid
                item
                display='grid'
                style={{
                    cursor: 'pointer',
                }}>
                <IconFilter />
            </Grid>
        </Grid>
    )
}

InputWithIcons.defaultProps = {
    basicInputProps: {},
    className: 'input-with-icons',
    style: {},
}

export default InputWithIcons
