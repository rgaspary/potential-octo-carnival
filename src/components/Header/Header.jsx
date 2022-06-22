import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { UserMenu, ColorModeSwitcher } from '../../components'

export const Header = () => {
  return (
    <Flex
      flexDir="row"
      alignItems="center"
      // h="10"
      p="3"
      bgGradient="radial-gradient(circle, rgb(3, 32, 92) 50%, rgb(0, 0, 71) 100%) repeat scroll 0% 0%"
      color="white"
    >
      <UserMenu />
      <Text>
        Pega
        <Text fontWeight="bold" as="span">
          WORLD
        </Text>{' '}
        2022
      </Text>
      <ColorModeSwitcher ml="auto" />
    </Flex>
  )
}
