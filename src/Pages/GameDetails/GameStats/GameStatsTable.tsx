import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

interface IGameStatsTable {
    categories: string[]
    stats: Array<{
        wonMatch: boolean
        players: {
            eriseId: string
            username: string
            stats: {
                goals: number
                assists: number
                centers: number
                saves: number
                shots: number
                clears: number
            }
        }
    }>
}

const GameStatsTable: React.FC<IGameStatsTable> = (props): JSX.Element => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell align='right'>Goals</TableCell>
                        <TableCell align='right'>Assists</TableCell>
                        <TableCell align='right'>Clears</TableCell>
                        <TableCell align='right'>Shots</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.stats.map((value, key) => (
                        <TableRow
                            key={key}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}>
                            <TableCell component='th' scope='row'>
                                {value.players.username}
                            </TableCell>
                            <TableCell align='right'>
                                {value.players.stats.goals}
                            </TableCell>
                            <TableCell align='right'>
                                {value.players.stats.assists}
                            </TableCell>
                            <TableCell align='right'>
                                {value.players.stats.clears}
                            </TableCell>
                            <TableCell align='right'>
                                {value.players.stats.shots}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GameStatsTable
