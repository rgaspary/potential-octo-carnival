import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

export const MapComponent = (data) => {
  const { imagePath, imageAlt } = data
  return (
    <Flex justifyContent="center" alignItems="center">
      <Image src={imagePath} alt={imageAlt} />
    </Flex>
  )
}
