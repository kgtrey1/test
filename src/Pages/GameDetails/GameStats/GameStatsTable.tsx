import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

interface IGameStatsTable {
    categories: string[]
    stats: Array<{
        wonMatch: boolean
        players: {
            eriseId: string
            username: string
            stats: any
        }
    }>
}

const GameStatsTable: React.FC<IGameStatsTable> = (props): JSX.Element => {
    return (
        <TableContainer sx={{ backgroundColor: '#1A285B' }}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        {props.categories.map((value, key) => (
                            <TableCell
                                key={key}
                                sx={{ fontSize: '1.2vw' }}
                                style={
                                    key === 0
                                        ? { textAlign: 'left' }
                                        : { textAlign: 'center' }
                                }>
                                {value}
                            </TableCell>
                        ))}
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
                            <TableCell
                                component='th'
                                scope='row'
                                style={{ fontSize: '1vw' }}
                                sx={
                                    value.wonMatch
                                        ? { color: 'gold' }
                                        : { color: 'black' }
                                }>
                                {value.players.username}
                            </TableCell>
                            {Object.keys(value.players.stats).map(
                                (keyStats) => (
                                    <TableCell
                                        key={keyStats}
                                        sx={{ fontSize: '1vw' }}
                                        align='center'>
                                        {value.players.stats[keyStats]}
                                    </TableCell>
                                ),
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GameStatsTable
