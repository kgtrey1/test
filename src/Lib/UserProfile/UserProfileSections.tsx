import { Grid } from '@mui/material'
import { IconTextButton } from 'Lib/Buttons'
import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

interface IUserProfileSections {
    isMobile?: boolean
}

const UserProfileSections: React.FC<IUserProfileSections> = (
    props,
): JSX.Element => {
    const navigate = useNavigate()
    const location = useLocation()

    const getTextColor = (pathName: string) => {
        if (pathName == location.pathname) return '#AA16C0'
        return 'white'
    }

    return (
        <Grid container direction='column' alignItems='center'>
            <Grid item display='grid' paddingBottom='27px'>
                <IconTextButton
                    style={{
                        color: getTextColor('/userProfile'),
                    }}
                    onClick={() => {
                        props.isMobile
                            ? navigate('/userProfile/edit')
                            : navigate('/userProfile')
                    }}
                    text='Settings'
                    Icon={<></>}
                />
            </Grid>
            <Grid
                item
                width='100%'
                justifyContent='center'
                display='grid'
                paddingBottom='23px'
                paddingTop='23px'
                borderTop='1px solid white'
                borderBottom='1px solid white'>
                <IconTextButton
                    style={{
                        color: getTextColor('/Policy'),
                    }}
                    onClick={() => navigate('/Policy')}
                    text='Confidentiality & policy'
                    Icon={<></>}
                />
            </Grid>
            <Grid item display='grid' paddingTop='27px'>
                <IconTextButton
                    style={{
                        color: getTextColor('/'),
                    }}
                    onClick={() => navigate('#')}
                    text='Accounts space'
                    Icon={<></>}
                />
            </Grid>
        </Grid>
    )
}

UserProfileSections.defaultProps = {
    isMobile: false,
}

export default UserProfileSections
