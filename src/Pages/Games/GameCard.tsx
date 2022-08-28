import './GameCard.scss'
import React from 'react'
import { Grid } from '@mui/material'
import { ReactComponent as IconInfo } from 'Assets/icons/info.svg'
import { Text } from 'Lib/Texts'

export interface IGameCard {
    tags: string[]
    name: string
    image: string
}

const GameCard: React.FunctionComponent<IGameCard> = (
    props: IGameCard,
): JSX.Element => {
    return (
        <Grid container direction='column' className='game-card'>
            <Grid
                item
                display='grid'
                alignSelf='flex-end'
                style={{
                    cursor: 'pointer',
                }}>
                <IconInfo />
            </Grid>
            <Grid item paddingTop='15px' display='grid' alignSelf='center'>
                <Text
                    style={{
                        fontSize: 23,
                        fontFamily: 'Roboto-Bold',
                    }}
                    text={props.name}
                />
            </Grid>
            <Grid item paddingTop='30px' display='grid' alignSelf='center'>
                <img
                    src={props.image}
                    alt='game-image'
                    style={{
                        width: '300px',
                        height: '200px',
                        objectFit: 'cover',
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default GameCard
