import React, { useState } from 'react'
import { Flex, Button, Text, Box } from '@chakra-ui/react'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export const EventTile = (data) => {
  const { title, description, hours, eventId, isFirst } = data
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  )
  const saveFavorite = () => {
    const found = favorites.find((fav) => fav === eventId)
    const oldFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    if (found) {
      // Remove from favorites
      const newFavorites = oldFavorites.filter((fav) => fav !== eventId)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      setFavorites(newFavorites)
    } else {
      // Add to favorites
      const newFavorites = [...oldFavorites, eventId]
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      setFavorites(newFavorites)
    }
  }
  return (
    <Flex
      data-testid="event-tile"
      data-eventid={eventId}
      py="calc(0.75rem)"
      px="calc(1rem)"
      borderTopColor="rgb(207, 207, 207)"
      borderTopWidth={isFirst ? '0' : '0.0625rem'}
      justifyContent="space-evenly"
      alignItems="center"
      minH="32"
      w="100%"
    >
      <Button
        onClick={saveFavorite}
        variant="ghost"
        w="50px"
        aria-label={`bookmark ${title} event`}
      >
        <IconContext.Provider value={{ size: '50px' }}>
          {favorites.find((fav) => fav === eventId) ? (
            <BsFillBookmarkFill />
          ) : (
            <BsBookmark />
          )}
        </IconContext.Provider>
      </Button>
      <Flex
        alignItems="center"
        flexDir={{ base: 'column', md: 'row' }}
        w={{ base: '80%', md: '90%' }}
        textAlign="left"
        ml="15px"
      >
        <Box w={{ base: '100%', md: '70%' }}>
          <Text fontWeight="bold">{title}</Text>
          <Text fontSize="md">{description}</Text>
        </Box>
        <Text
          w={{ base: '100%', md: '30%' }}
          fontSize="md"
          ml={{ base: 0, md: 'auto' }}
          mt={{ base: '16px', md: 0 }}
          textAlign={{ base: 'center', md: 'right' }}
        >
          {hours.start} - {hours.end}
        </Text>
      </Flex>
    </Flex>
  )
}
