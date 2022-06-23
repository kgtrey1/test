import React from 'react'
import './BasicInput.scss'

interface IBasicInput extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
    style?: React.CSSProperties
}

const BasicInput: React.FunctionComponent<IBasicInput> = (
    props: IBasicInput,
): JSX.Element => {
    const { className, style } = props

    return <input {...props} style={style} className={className} />
}

BasicInput.defaultProps = {
    className: 'basic-input',
    style: undefined,
}

export default BasicInput
