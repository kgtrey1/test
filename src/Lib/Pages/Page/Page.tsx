import { Grid } from '@mui/material'
import { Footer } from 'Lib/Footers'
import { SimpleNavbar } from 'Lib/Navbars'
import React from 'react'
import './Page.scss'
import backgroundImage from 'Assets/illustrations/background.png'

interface IPage {
    children: React.ReactNode
    hideNavbar?: boolean
    hideFooter?: boolean
    className?: string
    style?: React.CSSProperties
}

const Page: React.FunctionComponent<IPage> = (props: IPage): JSX.Element => {
    const { hideNavbar, hideFooter, className, children, style } = props

    return (
        <Grid
            container
            direction='column'
            wrap='nowrap'
            className={className}
            style={style}>
            {!hideNavbar && (
                <Grid item display='grid'>
                    <SimpleNavbar />
                </Grid>
            )}
            <Grid
                item
                xs
                display='grid'
                marginTop='10%'
                marginLeft='10%'
                marginRight='10%'
                marginBottom='10%'
                style={{
                    //backgroundImage: `url(${backgroundImage})`,
                    //backgroundRepeat: 'no-repeat',
                    //backgroundSize: 'auto 80%',
                    backgroundPosition: 'right bottom',
                }}>
                {children}
            </Grid>
            {!hideFooter && (
                <Grid item display='grid'>
                    <Footer />
                </Grid>
            )}
        </Grid>
    )
}

Page.defaultProps = {
    hideNavbar: false,
    hideFooter: false,
    className: 'page-body',
    style: undefined,
}

export default Page
