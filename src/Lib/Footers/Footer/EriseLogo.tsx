import React from 'react'
import eriseLogo from 'Assets/illustrations/eriseLogo.png'

const EriseLogo = (): JSX.Element => {
    return (
        <img
            alt='erise-logo'
            style={{
                objectFit: 'contain',
                maxHeight: '70px',
            }}
            src={eriseLogo}
        />
    )
}

export default EriseLogo
