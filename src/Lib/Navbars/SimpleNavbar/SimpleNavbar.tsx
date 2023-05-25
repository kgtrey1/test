import { Grid } from '@mui/material'
import React from 'react'
import './SimpleNavbar.scss'
import EriseLogo from './EriseLogo'
import NavigationButtons from './NavigationButtons'
import StartAndLoginButtons from './StartAndLoginButtons'
import { useAppSelector } from 'Hooks'
import { ReactComponent as IconAccount } from 'Assets/icons/account.svg'
import { IconTextButton } from 'Lib/Buttons'
import { useNavigate } from 'react-router-dom'

interface ISimpleNavbar {
    className?: string
    style?: React.CSSProperties
}

const SimpleNavbar: React.FunctionComponent<ISimpleNavbar> = (
    props: ISimpleNavbar,
): JSX.Element => {
    const { className, style } = props
    const user = useAppSelector((x) => x.user)
    const navigate = useNavigate()

    return (
        <Grid
            container
            direction='row'
            wrap='nowrap'
            spacing='80px'
            className={className}
            style={style}>
            <Grid item display='grid'>
                <EriseLogo />
            </Grid>
            <Grid item display='grid'>
                <NavigationButtons />
            </Grid>
            <Grid item display='grid'>
                {!user?.user ? (
                    user.isLoading ? (
                        <></>
                    ) : (
                        <StartAndLoginButtons />
                    )
                ) : (
                    <IconTextButton
                        style={{
                            color: '#FFFFFF',
                        }}
                        onClick={() => navigate('/userProfile')}
                        text='My account'
                        Icon={<IconAccount fill={'#FFFFFF'} />}
                    />
                )}
            </Grid>
        </Grid>
    )
}

SimpleNavbar.defaultProps = {
    className: 'simple-navbar',
    style: undefined,
}

export default SimpleNavbar
