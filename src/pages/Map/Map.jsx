import React from 'react'
import { Box, Text, Link, Flex } from '@chakra-ui/react'
import conferenceMap from '../../images/conference-map.jpg'
import { MapComponent } from '../../components'
import { BsCloudDownload } from 'react-icons/bs'

export const Map = () => {
  return (
    <Box>
      <Text as="h1" fontSize="17px" fontWeight={600}>
        Conference Map
      </Text>
      <MapComponent imagePath={conferenceMap} imageAlt="Conference Map" />
      <Link
        fontWeight={600}
        href={conferenceMap}
        target="_blank"
        color="blueMedium"
      >
        <Flex alignItems="center" justifyContent="center">
          <Text mr="2" as="span">
            Download this map to your device
          </Text>{' '}
          <BsCloudDownload />
        </Flex>
      </Link>
    </Box>
  )
}
