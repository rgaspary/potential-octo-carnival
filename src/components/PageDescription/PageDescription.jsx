import React from 'react'
import { Box, Text } from '@chakra-ui/react'

export const PageDescription = (data, props) => {
  const { copy, textAlign } = data
  return (
    <Box data-testid="page-description" {...props}>
      {copy.map((paragraph, index) => (
        <Text key={index} textAlign={textAlign}>
          {paragraph}
        </Text>
      ))}
    </Box>
  )
}
