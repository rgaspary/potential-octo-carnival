import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { DayTabs, MapComponent } from '../../components'
import conferenceMap from '../../images/conference-map.webp'
import calendarData from '../../mocks/calendar.json'

export const Home = () => {
  return (
    <SimpleGrid w="full" columns={{ sm: 1, md: 2 }}>
      <DayTabs calendar={calendarData} />
      <MapComponent
        imagePath={conferenceMap}
        imageAlt="Conference Map"
        downloadLink="https://localhost:3000/map"
      />
    </SimpleGrid>
  )
}
