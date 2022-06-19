import { Text } from 'Lib/Texts'
import { BasicInput } from 'Lib/Inputs'
import React from 'react'
import { Grid } from '@mui/material'

const Newsletter = (): JSX.Element => {
    return (
        <Grid container direction='column' wrap='nowrap' spacing='16px'>
            <Grid item display='grid' paddingLeft='8px'>
                <Text
                    style={{ fontSize: '25px', whiteSpace: 'nowrap' }}
                    text='Subscribe to our newsletter'
                />
            </Grid>
            <Grid item display='grid' width='404px'>
                <BasicInput placeholder='Enter your email' />
            </Grid>
        </Grid>
    )
}

export default Newsletter
