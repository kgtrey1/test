import React from 'react'
import './GradientBorderButton.scss'

interface IGradientBorderButton
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    className?: string
    style?: React.CSSProperties
}

const GradientBorderButton: React.FunctionComponent<IGradientBorderButton> = (
    props: IGradientBorderButton,
): JSX.Element => {
    const { className, style, text } = props

    return (
        <button style={style} className={className}>
            {text}
        </button>
    )
}

GradientBorderButton.defaultProps = {
    className: 'gradient-border-button',
    style: undefined,
}

export default GradientBorderButton
