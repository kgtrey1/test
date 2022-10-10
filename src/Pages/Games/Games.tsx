import { Page } from 'Lib/Pages'
import React from 'react'
import { Grid } from '@mui/material'
import { InputWithIcons } from 'Lib/Inputs'
import GameCard, { IGameCard } from './GameCard'
import { Text } from 'Lib/Texts'

const Games: React.FunctionComponent = (): JSX.Element => {
    const [searchText, setSearchText] = React.useState('')
    const gameList: IGameCard[] = [
        {
            tags: ['FPS', '1V1', '2V2'],
            name: 'Rocket League',
            image: 'https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-2021-11-30t111613-030.jpg',
        },
        {
            tags: ['Battle Royal', 'Versus'],
            name: 'Fortnite',
            image: 'https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg',
        },
        {
            tags: ['FPS', '1V1', '2V2'],
            name: 'Rocket League',
            image: 'https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-2021-11-30t111613-030.jpg',
        },
        {
            tags: ['FPS', '1V1', '2V2'],
            name: 'Rocket League',
            image: 'https://www.journaldugeek.com/content/uploads/2021/11/template-jdg-2021-11-30t111613-030.jpg',
        },
        {
            tags: ['Battle Royal', 'Versus'],
            name: 'Fortnite',
            image: 'https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg',
        },
    ]
    const tagsList = ['Battle Royal', 'Versus', 'FPS', '1V1', '2V2']

    return (
        <Page>
            <Grid container direction='column' flex='nowrap'>
                <Grid item display='grid'>
                    <Grid
                        container
                        direction='row'
                        justifySelf='center'
                        maxWidth='800px'
                        justifyContent='center'>
                        <Grid item display='grid' xs={8}>
                            <InputWithIcons
                                basicInputProps={{
                                    value: searchText,
                                    onChange: (e) =>
                                        setSearchText(e.target.value),
                                    placeholder: 'Search a game...',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item display='grid' paddingTop='100px'>
                    <Grid
                        container
                        justifyContent='center'
                        direction={searchText ? 'row' : 'column'}
                        spacing='20px'
                        paddingLeft='100px'
                        paddingRight='20px'
                        wrap='wrap'>
                        {searchText
                            ? gameList
                                  .filter((e) =>
                                      e.name
                                          .toLowerCase()
                                          .includes(searchText.toLowerCase()),
                                  )
                                  .map((game, index) => {
                                      return (
                                          <Grid item key={index} display='grid'>
                                              <GameCard {...game} />
                                          </Grid>
                                      )
                                  })
                            : tagsList.map((tag, index) => {
                                  return (
                                      <Grid
                                          item
                                          paddingLeft='20px'
                                          paddingRight='20px'
                                          key={index}
                                          display='grid'>
                                          <Grid
                                              container
                                              direction='column'
                                              wrap='nowrap'>
                                              <Grid item display='grid'>
                                                  <Text
                                                      style={{
                                                          fontSize: 45,
                                                          fontFamily:
                                                              'Roboto-Bold',
                                                      }}
                                                      text={tag}
                                                  />
                                              </Grid>
                                              <Grid
                                                  item
                                                  display='grid'
                                                  paddingTop='15px'>
                                                  <Grid
                                                      container
                                                      direction='row'
                                                      spacing='20px'
                                                      wrap='wrap'>
                                                      {gameList
                                                          .filter((e) =>
                                                              e.tags.includes(
                                                                  tag,
                                                              ),
                                                          )
                                                          .map(
                                                              (game, index) => {
                                                                  return (
                                                                      <Grid
                                                                          item
                                                                          key={
                                                                              index
                                                                          }
                                                                          display='grid'>
                                                                          <GameCard
                                                                              {...game}
                                                                          />
                                                                      </Grid>
                                                                  )
                                                              },
                                                          )}
                                                  </Grid>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                  )
                              })}
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
}

export default Games
