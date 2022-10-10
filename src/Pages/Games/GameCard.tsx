import './GameCard.scss'
import React from 'react'
import { Grid, Tooltip, IconButton } from '@mui/material'
import { ReactComponent as IconInfo } from 'Assets/icons/info.svg'
import { Text } from 'Lib/Texts'

export interface IGameCard {
    _id: string
    tags: string[]
    name: string
    image: string
    description: string
}

export interface IGameCardComponent {
    game: IGameCard
    descriptionList: string[]
    setDescriptionList: React.Dispatch<React.SetStateAction<string[]>>
}

const GameCard: React.FunctionComponent<IGameCardComponent> = (
    props: IGameCardComponent,
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
                <Tooltip title='Détails'>
                    <IconButton
                        onClick={() => {
                            props.setDescriptionList((state) => {
                                const newState = [...state]

                                if (newState.includes(props.game._id)) {
                                    const indexFounded = newState.findIndex(
                                        (id) => id === props.game._id,
                                    )
                                    if (indexFounded !== -1) {
                                        newState.splice(indexFounded, 1)
                                    }
                                } else {
                                    newState.push(props.game._id)
                                }
                                return newState
                            })
                        }}
                        style={{ margin: 0, padding: 0 }}>
                        <IconInfo />
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item paddingTop='15px' display='grid' alignSelf='center'>
                <Text
                    style={{
                        fontSize: 23,
                        fontFamily: 'Roboto-Bold',
                    }}
                    text={props.game.name}
                />
            </Grid>
            <Grid item paddingTop='30px' display='grid' alignSelf='center'>
                <img
                    src={props.game.image}
                    alt='game-image'
                    style={{
                        width: '300px',
                        height: '200px',
                        objectFit: 'cover',
                    }}
                />
            </Grid>
            {props.descriptionList.includes(props.game._id) && (
                <Grid item display='grid' paddingTop='30px'>
                    <Text text={props.game.description} />
                </Grid>
            )}
        </Grid>
    )
}

export default GameCard
