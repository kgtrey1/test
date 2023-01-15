import { CircularProgress, Grid, LinearProgress } from '@mui/material'
import { useAppSelector } from 'Hooks'
import { Footer } from 'Lib/Footers'
import { SimpleNavbar } from 'Lib/Navbars'
import React from 'react'
import './Page.scss'

interface IPage {
    children: React.ReactNode
    hideNavbar?: boolean
    hideFooter?: boolean
    className?: string
    style?: React.CSSProperties
}

const Page: React.FunctionComponent<IPage> = (props: IPage): JSX.Element => {
    const { hideNavbar, hideFooter, className, children, style } = props

    /*
    // Loading every page
    const user = useAppSelector((x) => x.user)
    const [canUsePage, setCanUsePage] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setCanUsePage(true)
        }, 1500)
    }, [])

    if ((user.isLoading && !user.user) || !canUsePage) {
        return (
            <Grid
                container
                direction='column'
                wrap='nowrap'
                alignItems={'center'}
                justifyContent='center'
                style={{
                    width: '100vw',
                    height: '100vh',
                }}>
                <Grid item>
                    <CircularProgress
                        style={{
                            width: '150px',
                            height: '150px',
                            color: '#FFF',
                        }}
                    />
                </Grid>
            </Grid>
        )
    }
    */

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
