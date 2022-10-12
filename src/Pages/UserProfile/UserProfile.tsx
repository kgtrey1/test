import React from 'react'
import { Grid, Typography } from '@mui/material'
import { IconTextButton } from 'Lib/Buttons'
import { Page } from 'Lib/Pages'
import { ReactComponent as IconBack } from 'Assets/icons/back_arrow_left.svg'
import EditPen from 'Assets/icons/edit_pen.svg'
import CloseCross from 'Assets/icons/close_cross.svg'
import UserProfilePicture from 'Lib/UserProfile/UserProfilePicture'
import { useNavigate } from 'react-router-dom'
import UserProfileSections from 'Lib/UserProfile/UserProfileSections'
import LinkAccount from 'Lib/UserProfile/LinkAccount'
import { IUser } from '../../Interfaces/IUser'
import UserProfilePreview from 'Lib/UserProfile/UserProfilePreview'
import UserProfileEditSection from 'Lib/UserProfile/UserProfileEditSection'

const UserProfile: React.FC<IUser> = (props): JSX.Element => {
    const navigate = useNavigate()
    const [editSection, setEditSection] = React.useState(false)

    return (
        <Page hideFooter={true} hideNavbar={true}>
            <Grid container direction='row'>
                <Grid item xs={4} style={{ background: '#0B1946' }}>
                    <Grid
                        container
                        direction='column'
                        alignItems='center'
                        wrap='nowrap'>
                        <Grid item paddingRight='450px' paddingTop='55px'>
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
                                {props.username}
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
                        <Grid item paddingLeft='800px' paddingTop='80px'>
                            <img
                                width='268px'
                                height='70.05px'
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
                                    <img src={EditPen} alt='Edit button' />
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
                                            <img
                                                src={EditPen}
                                                alt='Edit button'
                                            />
                                        ) : (
                                            <img
                                                src={CloseCross}
                                                alt='Close button'
                                            />
                                        )}
                                    </button>
                                </Grid>
                                {editSection ? (
                                    <UserProfileEditSection
                                        username={props.username}
                                        email={props.email}
                                        bio={
                                            props.bio
                                        }></UserProfileEditSection>
                                ) : (
                                    <UserProfilePreview
                                        username={props.username}
                                        email={props.email}
                                        bio={props.bio}></UserProfilePreview>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
}

export default UserProfile
