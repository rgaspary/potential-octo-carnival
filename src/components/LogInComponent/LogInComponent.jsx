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
    <Box data-testid="login-component">
      <Box
        borderRadius="0.5rem"
        backgroundColor={useColorModeValue('white', 'grayExtraDark')}
        boxShadow="rgba(0, 0, 0, 0.5) 0px 0.125rem 0.5rem"
        mb="5"
      >
        <Text as="h1" px="4" py="3" textAlign="left" fontSize="3xl">
          Login
        </Text>
        <Box
          px="4"
          py="3"
          borderTopWidth="1px"
          borderTopColor={useColorModeValue('grayLight', 'grayMedium')}
        >
          <form>
            <FormControl pb="calc(0.5rem)">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
              {/* <FormErrorMessage>{form.errors.email}</FormErrorMessage> */}
            </FormControl>
            <FormControl pb="calc(0.5rem)">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input id="password" type="password" />
              {/* <FormErrorMessage>{form.errors.password}</FormErrorMessage> */}
            </FormControl>
            <Button>Login</Button>
          </form>
        </Box>
      </Box>
      <Text color="blueMedium" _hover={{ textDecoration: 'underline' }}>
        <Link to={urls.SignUpPage()}>Don&apos;t have an account?</Link>
      </Text>
    </Box>
  )
}
