import React, { useState } from 'react'
import { Flex, Button, Text, Box } from '@chakra-ui/react'
import { BsFillBookmarkFill, BsBookmark } from 'react-icons/bs'

export const EventTile = (data) => {
  const { title, description, hours, eventId, isFirst } = data
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  )
  // console.log(favorites)
  const saveFavorite = () => {
    const found = favorites.find((fav) => fav === eventId)
    // console.log(found)
    if (found === undefined) {
      const newFavorites = JSON.stringify([...favorites, eventId])
      localStorage.setItem('favorites', newFavorites)
      setFavorites(newFavorites)
    }
    // console.log(favorites)
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
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
    >
      <Button onClick={saveFavorite} variant="ghost">
        {favorites.find((fav) => fav === eventId) ? (
          <BsFillBookmarkFill />
        ) : (
          <BsBookmark />
        )}
      </Button>
      <Box w="70%" px="3">
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="md">{description}</Text>
      </Box>
      <Text fontSize="md" mt={{ base: '16px', md: 0 }}>
        {hours.start} - {hours.end}
      </Text>
    </Flex>
  )
}
