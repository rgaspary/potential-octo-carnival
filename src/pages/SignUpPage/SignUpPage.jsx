import React from 'react'
import { SignupComponent } from '../../components'
import { Flex } from '@chakra-ui/react'

export const SignUpPage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100%">
      <SignupComponent />
    </Flex>
  )
}
