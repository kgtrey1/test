import React from 'react'
import { Grid, Typography } from '@mui/material'
import { IconTextButton } from 'Lib/Buttons'
import { ReactComponent as IconBack } from 'Assets/icons/back_arrow_left.svg'
import { ReactComponent as IconEdit } from 'Assets/icons/edit_pen.svg'
import { ReactComponent as IconClose } from 'Assets/icons/close_cross.svg'
import UserProfilePicture from 'Lib/UserProfile/UserProfilePicture'
import { useNavigate } from 'react-router-dom'
import UserProfileSections from 'Lib/UserProfile/UserProfileSections'
import LinkAccount from 'Lib/UserProfile/LinkAccount'
import UserProfilePreview from 'Lib/UserProfile/UserProfilePreview'
import UserProfileEditSection from 'Lib/UserProfile/UserProfileEditSection'
import { useAppSelector } from 'Hooks'

const SimpleUserProfile: React.FC = (): JSX.Element => {
    const navigate = useNavigate()
    const [editSection, setEditSection] = React.useState(false)
    const user = useAppSelector((x) => x.user)

    return (
        <Grid container direction='row' width='100vw' height='100vh'>
            <Grid item xs={4} style={{ background: '#0B1946' }}>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    wrap='nowrap'>
                    <Grid item paddingTop='8vh' paddingRight='22vw'>
                        <IconTextButton
                            Icon={<IconBack />}
                            text='Back'
                            onClick={() => navigate('/')}
                        />
                    </Grid>
                    <Grid item paddingTop='73px'>
                        <UserProfilePicture />
                    </Grid>
                    <Grid item paddingTop='43.19px'>
                        <Typography
                            color='white'
                            fontFamily='Roboto-Regular'
                            fontSize='19px'
                            fontWeight='bold'>
                            {user.user?.username}
                        </Typography>
                    </Grid>
                    <Grid item paddingTop='53.41px' width='100%'>
                        <UserProfileSections />
                    </Grid>
                    <Grid item paddingTop='27px'>
                        <LinkAccount />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    wrap='nowrap'>
                    <Grid item paddingLeft='50vw' paddingTop='8vh'>
                        <img
                            width='185vw'
                            height='65vh'
                            src={require('./../../Assets/illustrations/eriseLogo.png')}
                            alt='erise logo'
                        />
                    </Grid>
                    <Grid item>
                        <Grid container wrap='nowrap' direction='row'>
                            <Grid item paddingTop='37.95px'>
                                <UserProfilePicture />
                            </Grid>
                            <Grid item>
                                <IconTextButton
                                    Icon={<IconEdit />}
                                    text=''
                                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                                    onClick={() => {}}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item paddingTop='85px'>
                        <Grid
                            container
                            direction='column'
                            wrap='nowrap'
                            alignItems='end'>
                            <Grid item paddingBottom='10px'>
                                <button
                                    style={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}
                                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                    onClick={(event) => {
                                        setEditSection(!editSection)
                                    }}>
                                    {!editSection ? (
                                        <IconTextButton
                                            Icon={<IconEdit />}
                                            text=''
                                            // eslint-disable-next-line @typescript-eslint/no-empty-function
                                            onClick={() => {}}
                                        />
                                    ) : (
                                        <IconTextButton
                                            Icon={<IconClose />}
                                            text=''
                                            // eslint-disable-next-line @typescript-eslint/no-empty-function
                                            onClick={() => {}}
                                        />
                                    )}
                                </button>
                            </Grid>
                            {editSection ? (
                                <UserProfileEditSection />
                            ) : (
                                <UserProfilePreview
                                    username={user.user?.username as string}
                                    email={user.user?.mail as string}
                                    bio={user.user?.bio as string}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SimpleUserProfile
