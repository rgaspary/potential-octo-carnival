import {
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react'
import React from 'react'

export const NewAccountForm = () => {
  return (
    <Flex alignItems="center" flexDir="column">
      <SimpleGrid columns={2} spacing={10} mb="3">
        <FormControl>
          <FormLabel htmlFor="first-name">First Name</FormLabel>
          <Input id="first-name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="last-name">Last Name</FormLabel>
          <Input id="last-name" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="company">Company Name</FormLabel>
          <Input id="company" type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input id="email" type="email" />
        </FormControl>
      </SimpleGrid>
      <Button>Create an account</Button>
    </Flex>
  )
}
