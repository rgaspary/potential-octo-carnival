import React from 'react'
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { EventTile } from '../EventTile'

export const DayTabs = (data) => {
  const { calendar } = data
  return (
    <Tabs>
      <TabList>
        {calendar.map((day) => (
          <Tab key={day.title}>{day.title}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {calendar.map((day) => (
          <TabPanel key={day.title}>
            <Box
              borderRadius="8px"
              boxShadow="rgba(0, 0, 0, 0.2) 0px 2px 8px 0px"
            >
              {day.events.map((event, index) => (
                <EventTile
                  key={event.title}
                  title={event.title}
                  description={event.description}
                  hours={event.hours}
                  eventId={event.eventId}
                  isFirst={index === 0}
                />
              ))}
            </Box>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
