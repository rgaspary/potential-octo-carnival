import {
  Box,
  FormControl,
  Text,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { urls } from '../../routes'

export const LogInComponent = () => {
  return (
    <Box>
      <Box
        borderRadius="0.5rem"
        backgroundColor={useColorModeValue('white', 'grayExtraDark')}
        boxShadow="rgba(0, 0, 0, 0.5) 0px 0.125rem 0.5rem"
      >
        <Text as="h1">Login</Text>
        <form>
          <Box>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
              {/* <FormErrorMessage>{form.errors.email}</FormErrorMessage> */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" />
              {/* <FormErrorMessage>{form.errors.password}</FormErrorMessage> */}
            </FormControl>
            <Button>Login</Button>
          </Box>
        </form>
      </Box>
      <Link to={urls.Home()} color="blueMedium">
        Already have an account?
      </Link>
    </Box>
  )
}
