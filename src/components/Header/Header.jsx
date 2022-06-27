import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { UserMenu, ColorModeSwitcher } from '../../components'
import { urls } from '../../routes'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Flex
      flexDir="row"
      alignItems="center"
      p="3"
      bgGradient="radial-gradient(circle, rgb(3, 32, 92) 50%, rgb(0, 0, 71) 100%) repeat scroll 0% 0%"
      color="white"
    >
      <UserMenu />
      <Text ml="3">
        <Link to={urls.Home()}>
          Pega
          <Text fontWeight="bold" as="span">
            WORLD
          </Text>{' '}
          2023
        </Link>
      </Text>
      <ColorModeSwitcher ml="auto" />
    </Flex>
  )
}
