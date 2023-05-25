import { Grid } from '@mui/material'
import { GradientBackgroundButton } from 'Lib/Buttons'
import { Page } from 'Lib/Pages'
import { Text, Title } from 'Lib/Texts'
import React from 'react'
import eriseBackground from 'Assets/illustrations/background.png'

const BackgroundImage = (): JSX.Element => {
    return <img alt='background' src={eriseBackground} />
}

const Home: React.FunctionComponent = (): JSX.Element => {
    return (
        <Page>
            <Grid
                container
                direction='row'
                wrap='nowrap'
                justifyContent='space-between'>
                <Grid item display='grid'>
                    <Grid container direction='column' flexWrap='nowrap'>
                        <Grid item alignSelf='flex-start' display='grid'>
                            <Title
                                style={{
                                    fontSize: '68px',
                                    textAlign: 'center',
                                }}
                                text='Welcome to e-rise !'
                            />
                        </Grid>
                        <Grid
                            item
                            alignSelf='flex-start'
                            display='grid'
                            paddingTop='40px'>
                            <Text
                                style={{
                                    fontSize: '30px',
                                    textAlign: 'center',
                                }}
                                text='Your Tournament platform'
                            />
                        </Grid>
                        <Grid
                            item
                            alignSelf='flex-start'
                            display='grid'
                            paddingTop='40px'>
                            <Text
                                style={{ fontSize: '19px' }}
                                text='Want to know more about erise ?'
                            />
                        </Grid>
                        <Grid item display='grid' paddingTop='40px'>
                            <GradientBackgroundButton text='Click here' />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Home
