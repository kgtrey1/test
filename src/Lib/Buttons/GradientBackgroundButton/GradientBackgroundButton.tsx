import React from 'react'
import './GradientBackgroundButton.scss'

interface IGradientBackgroundButton
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    className?: string
    style?: React.CSSProperties
}

const GradientBackgroundButton: React.FunctionComponent<
    IGradientBackgroundButton
> = (props: IGradientBackgroundButton): JSX.Element => {
    const { className, style, text } = props

    return (
        <button style={style} className={className}>
            {text}
        </button>
    )
}

GradientBackgroundButton.defaultProps = {
    className: 'gradient-background-button',
    style: undefined,
}

export default GradientBackgroundButton
