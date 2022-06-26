import React from 'react'
import {
  Box,
  FormControl,
  Text,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { urls } from '../../routes'
import { Link } from 'react-router-dom'

export const SignupComponent = () => {
  return (
    <Box data-testid="signup-component">
      <Box
        borderRadius="0.5rem"
        backgroundColor={useColorModeValue('white', 'grayExtraDark')}
        boxShadow="rgba(0, 0, 0, 0.5) 0px 0.125rem 0.5rem"
        mb="5"
        pb="5"
      >
        <Text as="h1" px="4" py="3" textAlign="left" fontSize="3xl">
          Sign Up
        </Text>
        <form>
          <Grid
            gridTemplateColumns={{ base: '100%', md: '50% 50%' }}
            gap={1}
            px="4"
            py="3"
            borderTopWidth="1px"
            borderTopColor={useColorModeValue('grayLight', 'grayMedium')}
          >
            <GridItem colSpan={1}>
              <FormControl pb="calc(0.5rem)">
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input id="firstName" type="text" placeholder="First Name" />
                {/* <FormErrorMessage>{form.errors.firstName}</FormErrorMessage> */}
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl pb="calc(0.5rem)">
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input id="lastName" type="text" placeholder="Last Name" />
                {/* <FormErrorMessage>{form.errors.lastName}</FormErrorMessage> */}
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl pb="calc(0.5rem)">
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
                {/* <FormErrorMessage>{form.errors.email}</FormErrorMessage> */}
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl pb="calc(0.5rem)">
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input id="password" type="password" />
                {/* <FormErrorMessage>{form.errors.password}</FormErrorMessage> */}
              </FormControl>
            </GridItem>
            <GridItem colSpan={1} colEnd={3}>
              <FormControl pb="calc(0.5rem)">
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <Input id="confirmPassword" type="password" />
                {/* <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage> */}
              </FormControl>
            </GridItem>
          </Grid>
          <Button>Create Account</Button>
        </form>
      </Box>
      <Text color="blueMedium" _hover={{ textDecoration: 'underline' }}>
        <Link to={urls.LogInPage()}>Already have an account?</Link>
      </Text>
    </Box>
  )
}
