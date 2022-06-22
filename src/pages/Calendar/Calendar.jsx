import { Box } from '@chakra-ui/react'
import React from 'react'
import { DayTabs } from '../../components'
import calendarData from '../../mocks/calendar.json'

export const Calendar = () => {
  return (
    <Box w="full">
      <DayTabs calendar={calendarData} />
    </Box>
  )
}
