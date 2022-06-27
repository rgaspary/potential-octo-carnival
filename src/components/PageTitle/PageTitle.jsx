import React from 'react'
import { Heading } from '@chakra-ui/react'

export const PageTitle = (data, props) => {
  const { heading, headingType } = data
  return (
    <Heading as={headingType} {...props} my="10">
      {heading}
    </Heading>
  )
}
