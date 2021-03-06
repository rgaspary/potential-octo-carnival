import React from 'react'
import { Box } from '@chakra-ui/react'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Box as="footer" my="5" mt="auto">
      &copy; {year} Pegasystems Inc.
    </Box>
  )
}
