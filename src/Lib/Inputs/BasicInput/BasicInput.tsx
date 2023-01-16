import { Grid } from '@mui/material'
import { Text } from 'Lib/Texts'
import React from 'react'
import './BasicInput.scss'

export interface IBasicInput
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    style?: React.CSSProperties
    hasError?: boolean
    displayError?: boolean
    errorMessage?: string
}

const BasicInput: React.FunctionComponent<IBasicInput> = (
    props: IBasicInput,
): JSX.Element => {
    const { className, style } = props
    const haveToDisplayError =
        props.hasError && props.errorMessage && props.displayError

    return (
        <Grid container direction='column' wrap='nowrap'>
            <Grid item display='grid'>
                <input
                    {...props}
                    style={style}
                    className={`${className}${
                        haveToDisplayError ? ' basic-input-error' : ''
                    }`}
                />
            </Grid>
            {haveToDisplayError && (
                <Grid item display='grid' paddingTop='5px' width={200}>
                    <Text
                        style={{
                            color: 'red',
                        }}
                        text={props.errorMessage as string}
                    />
                </Grid>
            )}
        </Grid>
    )
}

BasicInput.defaultProps = {
    className: 'basic-input',
    style: undefined,
    hasError: false,
    displayError: false,
    errorMessage: '',
}

export default BasicInput
