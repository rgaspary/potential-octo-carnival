import React from 'react'
import { Flex } from '@chakra-ui/react'
import { UserMenu, ColorModeSwitcher } from '../../components'

export const Header = () => {
  return (
    <Flex flexDir="row" alignItems="center" h="10" p="2">
      <UserMenu />
      <ColorModeSwitcher ml="auto" />
    </Flex>
  )
}
