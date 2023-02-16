import { Typography } from '@mui/material'
import React from 'react'

interface ILastTournamentsTitle {
    title: string
}

const LastTournamentsTitle: React.FC<ILastTournamentsTitle> = (
    props,
): JSX.Element => {
    return (
        <Typography color='white' fontFamily='Roboto-Regular' fontSize='3vh'>
            {props.title}
        </Typography>
    )
}

export default LastTournamentsTitle
