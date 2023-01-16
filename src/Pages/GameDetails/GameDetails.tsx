import { Grid, Typography } from '@mui/material'
import { Page } from 'Lib/Pages'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'

interface IGameDetails {
    imageURL: string
    description: string
    modes: Array<string>
}

const GameDetails: React.FC<IGameDetails> = (props): JSX.Element => {
    const { imageURL, description, modes } = props
    const [mode, setMode] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setMode(event.target.value as string)
    }

    return (
        <Page>
            <Grid
                container
                direction='column'
                alignItems='center'
                style={{ background: 'none' }}>
                <Grid item>
                    <img
                        src={imageURL}
                        height='240vh'
                        width='420vw'
                        style={{ borderRadius: '18%' }}></img>
                </Grid>
                <Grid item marginTop='5vh'>
                    <Typography
                        color='white'
                        fontFamily='Roboto-Regular'
                        fontSize='30px'>
                        Description
                    </Typography>
                </Grid>
                <Grid item width='100vh' marginTop='5vh'>
                    <Typography
                        align='justify'
                        color='white'
                        fontFamily='Roboto-Regular'
                        fontSize='20px'>
                        {description}
                    </Typography>
                </Grid>
                <Grid item marginTop='5vh'>
                    <Grid
                        container
                        direction='column'
                        alignItems='left'
                        width='100vh'>
                        <Grid item>
                            <Typography
                                color='white'
                                fontFamily='Roboto-Regular'
                                fontSize='30px'>
                                Mode
                            </Typography>
                        </Grid>
                        <Grid item marginTop='5vh' width='20vh'>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel style={{ color: 'white' }}>
                                        Select a mode
                                    </InputLabel>
                                    <Select
                                        value={mode}
                                        label='Mode'
                                        sx={{
                                            '& .MuiSelect-select': {
                                                borderColor: 'white',
                                            },
                                            '& .MuiTab-root.Mui-selected': {
                                                borderColor: 'white',
                                            },
                                        }}
                                        onChange={handleChange}>
                                        {modes.map((mode) => (
                                            <MenuItem key={mode} value={mode}>
                                                {mode}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
}

export default GameDetails
