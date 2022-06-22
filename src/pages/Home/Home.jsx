import { Box, Button, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { DayTabs } from '../../components'
import calendarData from '../../mocks/calendar.json'

export const Home = () => {
  return (
    <SimpleGrid w="full" columns={{ sm: 1, md: 2 }}>
      <DayTabs calendar={calendarData} />
      <Box>
        <Button variant="primary">Hello</Button>
      </Box>
    </SimpleGrid>
  )
}
