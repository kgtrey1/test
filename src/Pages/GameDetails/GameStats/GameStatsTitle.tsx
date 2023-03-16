import React from 'react'
import { Grid, Typography } from '@mui/material'
import { IconTextButton } from 'Lib/Buttons'
import { ReactComponent as IconBack } from 'Assets/icons/back_arrow_left.svg'
import { useNavigate } from 'react-router-dom'

interface IGameStatsTitle {
    title: string
}

const GameStatsTitle: React.FC<IGameStatsTitle> = (props): JSX.Element => {
    const navigate = useNavigate()

    return (
        <Grid container direction='row' paddingTop='6vh'>
            <Grid
                item
                xs={1}
                paddingLeft='2vw'
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                }}>
                <IconTextButton
                    Icon={<IconBack />}
                    text='Back'
                    onClick={() => navigate('/games/rocketleague')}
                />
            </Grid>
            <Grid
                item
                xs={11}
                paddingRight='7vw'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <Typography
                    align='justify'
                    color='white'
                    fontFamily='Roboto-Regular'
                    fontSize='3vw'>
                    {props.title}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default GameStatsTitle
