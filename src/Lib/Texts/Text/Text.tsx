import React from 'react'
import './Text.scss'

interface IText {
    text: string
    className?: string
    style?: React.CSSProperties
}

const Text: React.FunctionComponent<IText> = (props: IText): JSX.Element => {
    const { className, text, style } = props

    return (
        <span className={className} style={style}>
            {text}
        </span>
    )
}

Text.defaultProps = {
    className: 'basic-text',
    style: undefined,
}

export default Text
