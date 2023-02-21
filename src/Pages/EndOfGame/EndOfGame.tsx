import { CircularProgress, Grid } from '@mui/material'
import { Object as MyObject } from 'erise-types'
import { useAppDispatch } from 'Hooks'
import { Page } from 'Lib/Pages'
import { Text, Title } from 'Lib/Texts'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMatch } from 'Reducers/matchSlice'
import { ReactComponent as IconBack } from 'Assets/icons/back_arrow_left.svg'

interface Player {
    eriseId: string
    stats: any
}

const EndOfGameLoading: React.FC = () => {
    return (
        <Grid container direction='column' wrap='nowrap'>
            <Grid item display='grid' justifyContent='center'>
                <CircularProgress
                    style={{
                        width: '100px',
                        height: '100px',
                        color: '#FFF',
                    }}
                />
            </Grid>
        </Grid>
    )
}

const EndOfGameFailure: React.FC = () => {
    return (
        <Grid container direction='column' wrap='nowrap'>
            <Grid item display='grid'>
                <Text text={`Ce match n'existe pas.`} />
            </Grid>
        </Grid>
    )
}

const TitleAndGoBack: React.FC<{ title: string }> = (props) => {
    const navigate = useNavigate()
    return (
        <Grid
            container
            direction='row'
            wrap='nowrap'
            justifyContent='space-between'
            alignItems='center'
            spacing='40px'>
            <Grid item display='grid'>
                <Grid
                    container
                    direction='row'
                    wrap='nowrap'
                    spacing='15px'
                    alignItems='center'
                    style={{
                        cursor: 'pointer',
                        color: '#fff',
                    }}>
                    <Grid item display='grid'>
                        <IconBack />
                    </Grid>
                    <Grid item display='grid'>
                        <span
                            style={{
                                fontSize: '1.8vw',
                            }}
                            onClick={() => navigate('/')}>
                            Back to menu
                        </span>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item display='grid'>
                <Title text={props.title} style={{ fontSize: '5vw' }} />
            </Grid>
            <Grid item display='grid'></Grid>
        </Grid>
    )
}

const ScoreBoard: React.FC<{
    statKeys: string[]
    winners: Player[]
    loosers: Player[]
}> = (props) => {
    const [tableData, setTableData] = React.useState<Array<Array<string>>>([])
    const createNewLineFromPlayer = (player: Player): Array<string> => {
        const newLine = []
        newLine.push(player.eriseId)
        for (const k of props.statKeys) {
            if (k in player.stats) {
                const s = player.stats[k]
                newLine.push(typeof s === 'number' ? s.toString() : s)
            } else {
                newLine.push('')
            }
        }
        return newLine
    }
    const getTable = (): Array<Array<string>> => {
        const table: Array<Array<string>> = []
        table.push(['' /* Nom d'utilisateur */, ...props.statKeys])
        for (const w of props.winners) {
            table.push(createNewLineFromPlayer(w))
        }
        for (const l of props.loosers) {
            table.push(createNewLineFromPlayer(l))
        }
        return table
    }
    React.useEffect(() => {
        setTableData(getTable())
    }, [props.loosers, props.winners, props.statKeys])
    return (
        <Grid container direction='column' wrap='nowrap'>
            <table
                style={{
                    backgroundColor: 'rgba(11, 26, 78, 0.85)',
                    borderRadius: '67px',
                    padding: '30px',
                    color: '#fff',
                    fontFamily: 'Roboto-Regular',
                    fontSize: '40px',
                }}>
                <tbody>
                    {tableData.map((x, trIndex) => {
                        return (
                            <tr key={trIndex}>
                                {x.map((y, tdIndex) => {
                                    return (
                                        <td
                                            style={{
                                                paddingLeft: '5px',
                                                paddingRight: '5px',
                                                fontSize:
                                                    tdIndex === 0 ||
                                                    trIndex === 0
                                                        ? '2.5vw'
                                                        : '1.8vw',
                                            }}
                                            key={tdIndex}>
                                            {y}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Grid>
    )
}
const extractPlayersFromTeams = (
    match: MyObject.Match,
    wonMatch: boolean,
): Player[] => {
    if (match && Array.isArray(match?.teams)) {
        const teams = match.teams.filter((x) => x.wonMatch === wonMatch)
        const players = []
        for (const t of teams) {
            for (const m of t.players) {
                players.push(m)
            }
        }
        return players
    }
    return []
}

const GameImageAndWinners: React.FC<{ winners: Player[] }> = (props) => {
    return (
        <Grid
            container
            direction='row'
            wrap='nowrap'
            justifyContent='space-evenly'
            spacing='40px'>
            <Grid item display='grid'>
                <img
                    src={`https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-2021-11-30t111613-030.jpg`}
                    alt='Rocket League'
                    style={{
                        objectFit: 'cover',
                        width: '300px',
                        borderRadius: '40px',
                    }}
                />
                {/* Game image */}
            </Grid>
            <Grid item display='grid'>
                <Grid
                    container
                    direction='column'
                    wrap='nowrap'
                    justifyContent='center'>
                    <Grid item display='grid'>
                        <Text
                            text={`WINNER${
                                props.winners.length > 1 ? 'S' : ''
                            }`}
                            style={{
                                fontSize: '4vw',
                                textAlign: 'center',
                            }}
                        />
                    </Grid>
                    <Grid item display='grid'>
                        <Text
                            text={
                                props.winners.length === 0
                                    ? 'No winner'
                                    : props.winners
                                          .map((x) => x.eriseId)
                                          .join(', ')
                            }
                            style={{
                                fontSize: '4vw',
                                textAlign: 'center',
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

const EndOfGameSuccess: React.FC<{ match: MyObject.Match }> = (props) => {
    const { match } = props
    const [statKeys, setStatKeys] = React.useState<string[]>([])
    const [winners, setWinners] = React.useState<Player[]>([])
    const [loosers, setLoosers] = React.useState<Player[]>([])

    React.useEffect(() => {
        if (!match) {
            return
        }
        if (typeof match?.teams?.[0]?.players?.[0]?.stats === 'object') {
            const statKeys = Object.keys(match?.teams?.[0]?.players?.[0]?.stats)
            setStatKeys(statKeys)
        }
        setWinners(extractPlayersFromTeams(match, true))
        setLoosers(extractPlayersFromTeams(match, false))
    }, [match])

    return (
        <Grid container direction='column' wrap='nowrap' spacing='100px'>
            <Grid item display='grid'>
                <TitleAndGoBack
                    title={match?.gameId ? match.gameId : 'Titre non défini'}
                />
            </Grid>
            <Grid item display='grid'>
                <GameImageAndWinners winners={winners} />
            </Grid>
            {statKeys.length > 0 && (
                <Grid item display='grid'>
                    <ScoreBoard
                        statKeys={statKeys}
                        winners={winners}
                        loosers={loosers}
                    />
                </Grid>
            )}
        </Grid>
    )
}

const EndOfGame: React.FC = () => {
    const dispatch = useAppDispatch()
    const [match, setMatch] = React.useState<MyObject.Match>(undefined)
    const [pageState, setPageState] = React.useState<
        'loading' | 'success' | 'failure'
    >('loading')
    const { matchId } = useParams<{
        matchId: string
    }>()

    React.useEffect(() => {
        if (!matchId) {
            return
        }
        dispatch(
            getMatch({
                id: matchId,
            }),
        )
            .unwrap()
            .then((match) => {
                setMatch(match)
                setPageState('success')
            })
            .catch((err) => {
                setPageState('failure')
            })
    }, [matchId, dispatch])
    return (
        <Page hideFooter={true} hideNavbar={true} marginOverride={'3%'}>
            {pageState === 'loading' && <EndOfGameLoading />}
            {pageState === 'failure' && <EndOfGameFailure />}
            {pageState === 'success' && <EndOfGameSuccess match={match} />}
        </Page>
    )
}

export default EndOfGame
