import { Grid, Modal, Typography } from '@mui/material'
import { Page } from 'Lib/Pages'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'
import LastTournaments from './LastTournaments/LastTournaments'
import { GradientBorderButton } from 'Lib/Buttons'
import { useAppDispatch, useAppSelector } from 'Hooks'
import { snackbarActions } from 'Reducers/snackbarSlice'
import {
    matchActions,
    setMatchInProgress,
    setMatchPending,
} from 'Reducers/matchSlice'
import { Text } from 'Lib/Texts'
import { useNavigate } from 'react-router'
import { getTournament } from 'Reducers/tournamentSlice'

interface IGameDetails {
    imageURL: string
    description: string
    modes: Array<string>
}

const localGame = {
    name: 'Rocket League',
    tags: ['versus'],
    gameModes: [
        {
            id: '1v1',
            name: '1v1',
            description: '',
            matchmakingConfig: {
                amtPlayersPerTeam: 2,
                amtTeams: 2,
                queueSocketRoomId: '',
            },
            releaseDate: new Date(),
            tags: ['1v1'],
        },
    ],
    description: 'Description de Rocket League',
    creationDate: new Date(),
    image: 'https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-2021-11-30t111613-030.jpg',
    releaseDate: new Date(),
    _id: '',
}

const WaitingOpponent: React.FC = () => {
    const [points, setPoints] = React.useState<string>('...')

    React.useEffect(() => {
        const interval = setInterval(() => {
            setPoints((x) => {
                if (x === '...') {
                    return ''
                }
                if (x === '') {
                    return '.'
                }
                if (x === '.') {
                    return '..'
                }
                if (x === '..') {
                    return '...'
                }
                return '...'
            })
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <Text
            text={`Waiting for an opponent player${points}`}
            style={{
                textAlign: 'center',
                color: '#C567EE',
                fontWeight: 'bold',
            }}
        />
    )
}

const InProgressMatchPopup: React.FC = (props) => {
    const dispatch = useAppDispatch()
    const match = useAppSelector((x) => x.match)
    const user = useAppSelector((x) => x.user)
    if (match.loading.matchInProgress === true || !match.matchInProgress) {
        return <></>
    }

    return (
        <Modal
            open={true}
            onClose={() => {
                dispatch(matchActions.closeInProgressMatch())
            }}>
            <Box className={`modal`}>
                <Grid
                    container
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    gap='20px'
                    style={{ padding: 50 }}>
                    <Grid item display='grid'>
                        {/* First row */}
                        <Grid container direction='row' gap='20px'>
                            {/* Image */}
                            <Grid item display='grid'>
                                <img
                                    src={match.matchInProgress.game?.image}
                                    alt={match.matchInProgress.game?.name}
                                    style={{
                                        objectFit: 'cover',
                                        width: '300px',
                                        borderRadius: '40px',
                                    }}
                                />
                            </Grid>
                            {/* Game and mode */}
                            <Grid item display='grid'>
                                <Grid
                                    container
                                    direction='column'
                                    wrap='nowrap'
                                    justifyContent='space-evenly'>
                                    <Grid item display='grid'>
                                        <Text
                                            text={`Game: ${match.matchInProgress.game?.name}`}
                                        />
                                    </Grid>
                                    <Grid item display='grid'>
                                        <Text
                                            text={`Mode: ${match.matchInProgress.mode}`}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='grid' paddingTop='20px'>
                            {/* Second row */}
                            <Grid
                                container
                                direction='row'
                                gap='20px'
                                justifyContent='space-evenly'>
                                <Grid item display='grid'>
                                    <Grid
                                        container
                                        direction='column'
                                        alignItems='center'
                                        gap='5px'
                                        wrap='nowrap'>
                                        <Grid item display='grid'>
                                            <Text text='Player 1' />
                                        </Grid>
                                        <Grid item display='grid'>
                                            <img
                                                src={
                                                    user.user?.profilPicture
                                                        ? user.user
                                                              .profilPicture
                                                        : undefined
                                                }
                                                style={{
                                                    objectFit: 'cover',
                                                    width: '100px',
                                                    height: '100px',
                                                    borderRadius: '50px',
                                                    border: '1px solid white',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item display='grid'>
                                            <Text
                                                text={`${
                                                    user.user?.username
                                                        ? `@${user.user.username}`
                                                        : ''
                                                }`}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display='grid'>
                                    <Grid
                                        container
                                        direction='column'
                                        alignItems='center'
                                        gap='5px'
                                        wrap='nowrap'>
                                        <Grid item display='grid'>
                                            <Text text='Player 2' />
                                        </Grid>
                                        <Grid item display='grid'>
                                            <img
                                                src={
                                                    match.matchInProgress
                                                        ?.opponent
                                                        ?.profilPicture
                                                        ? match.matchInProgress
                                                              ?.opponent
                                                              .profilPicture
                                                        : undefined
                                                }
                                                style={{
                                                    objectFit: 'cover',
                                                    width: '100px',
                                                    height: '100px',
                                                    borderRadius: '50px',
                                                    border: '1px solid white',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item display='grid'>
                                            <Text
                                                text={`${
                                                    match.matchInProgress
                                                        ?.opponent?.username
                                                        ? `@${match.matchInProgress?.opponent?.username}`
                                                        : ''
                                                }`}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item display='grid' paddingTop='20px'>
                            <Text
                                text={`Game in progress`}
                                style={{
                                    textAlign: 'center',
                                    color: '#5991EA',
                                    fontWeight: 'bold',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

const PendingMatchPopup: React.FC = (props) => {
    const dispatch = useAppDispatch()
    const match = useAppSelector((x) => x.match)
    const user = useAppSelector((x) => x.user)
    if (match.loading.matchPending === true || !match.matchPending) {
        return <></>
    }

    return (
        <Modal
            open={true}
            onClose={() => {
                dispatch(matchActions.closeMatchPeding())
            }}>
            <Box className={`modal`}>
                <Grid
                    container
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    gap='20px'
                    style={{ padding: 50 }}>
                    <Grid item display='grid'>
                        {/* First row */}
                        <Grid container direction='row' gap='20px'>
                            {/* Image */}
                            <Grid item display='grid'>
                                <img
                                    src={match.matchPending.game?.image}
                                    alt={match.matchPending.game?.name}
                                    style={{
                                        objectFit: 'cover',
                                        width: '300px',
                                        borderRadius: '40px',
                                    }}
                                />
                            </Grid>
                            {/* Game and mode */}
                            <Grid item display='grid'>
                                <Grid
                                    container
                                    direction='column'
                                    wrap='nowrap'
                                    justifyContent='space-evenly'>
                                    <Grid item display='grid'>
                                        <Text
                                            text={`Game: ${match.matchPending.game?.name}`}
                                        />
                                    </Grid>
                                    <Grid item display='grid'>
                                        <Text
                                            text={`Mode: ${match.matchPending.mode}`}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item display='grid' paddingTop='20px'>
                            {/* Second row */}
                            <Grid
                                container
                                direction='row'
                                gap='20px'
                                justifyContent='space-evenly'>
                                <Grid item display='grid'>
                                    <Grid
                                        container
                                        direction='column'
                                        alignItems='center'
                                        gap='5px'
                                        wrap='nowrap'>
                                        <Grid item display='grid'>
                                            <Text text='Player 1' />
                                        </Grid>
                                        <Grid item display='grid'>
                                            <img
                                                src={
                                                    user.user?.profilPicture
                                                        ? user.user
                                                              .profilPicture
                                                        : undefined
                                                }
                                                style={{
                                                    objectFit: 'cover',
                                                    width: '100px',
                                                    height: '100px',
                                                    borderRadius: '50px',
                                                    border: '1px solid white',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item display='grid'>
                                            <Text
                                                text={`${
                                                    user.user?.username
                                                        ? `@${user.user.username}`
                                                        : ''
                                                }`}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display='grid'>
                                    <Grid
                                        container
                                        direction='column'
                                        alignItems='center'
                                        gap='5px'
                                        wrap='nowrap'>
                                        <Grid item display='grid'>
                                            <Text text='Player 2' />
                                        </Grid>
                                        <Grid item display='grid'>
                                            <img
                                                src={undefined}
                                                style={{
                                                    objectFit: 'cover',
                                                    width: '100px',
                                                    height: '100px',
                                                    borderRadius: '50px',
                                                    border: '1px solid white',
                                                }}
                                            />
                                        </Grid>
                                        <Grid item display='grid'>
                                            <Text text='@.......' />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item display='grid' paddingTop='20px'>
                            <WaitingOpponent />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}

const GameDetails: React.FC<IGameDetails> = (props): JSX.Element => {
    const { imageURL, description, modes } = props
    const [mode, setMode] = React.useState('')
    const dispatch = useAppDispatch()
    const match = useAppSelector((x) => x.match)
    const navigate = useNavigate()
    const [isSettedOnMessage, setIsSettedOnMessage] = React.useState(false)

    const handleChange = (event: SelectChangeEvent) => {
        setMode(event.target.value as string)
    }

    React.useEffect(() => {
        dispatch(getTournament())
            .unwrap()
            .catch((error: any) => {
                console.log(error)
                dispatch(
                    snackbarActions.openSnackbar({
                        message: error,
                        type: 'error',
                    }),
                )
            })
    }, [])

    React.useEffect(() => {
        if (isSettedOnMessage) {
            return
        }
        if (match.socket) {
            setIsSettedOnMessage(true)
            match.socket.onmessage = (message: any) => {
                if (message?.data) {
                    const result = JSON.parse(message.data)
                    if (result?.id === 1002) {
                        dispatch(
                            setMatchInProgress({
                                opponent: result?.opponent,
                                game: match.matchPending?.game
                                    ? match.matchPending.game
                                    : localGame,
                                mode: match.matchPending?.mode
                                    ? match.matchPending.mode
                                    : '1v1',
                                match: undefined,
                            }),
                        )
                    } else if (result?.id === 1003) {
                        dispatch(matchActions.setEndOfGame())
                        if (result?.matchId) {
                            navigate(`/end_of_game/${result.matchId}`)
                        }
                    }
                }
            }
        }
    }, [match, isSettedOnMessage])

    return (
        <>
            <PendingMatchPopup />
            <InProgressMatchPopup />
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
                                    fontSize='3vh'>
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
                                                <MenuItem
                                                    key={mode}
                                                    value={mode}>
                                                    {mode}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item display='grid' paddingTop='10px'>
                                <GradientBorderButton
                                    text='PLAY'
                                    onClick={() => {
                                        if (mode === '1v1') {
                                            dispatch(
                                                setMatchPending({
                                                    game: localGame,
                                                    mode: mode,
                                                }),
                                            )
                                                .unwrap()
                                                .then(() => {
                                                    return
                                                })
                                                .catch((err) => {
                                                    console.log(err)
                                                    snackbarActions.openSnackbar(
                                                        {
                                                            type: 'error',
                                                            message: err,
                                                        },
                                                    )
                                                })
                                        } else {
                                            dispatch(
                                                snackbarActions.openSnackbar({
                                                    type: 'error',
                                                    message:
                                                        'This mode is unavailable',
                                                }),
                                            )
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <LastTournaments />
                    </Grid>
                </Grid>
            </Page>
        </>
    )
}

export default GameDetails
