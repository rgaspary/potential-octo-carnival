import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

export const UserMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} variant="ghost">
        <HamburgerIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>Log in</MenuItem>
        <MenuItem>Events calendar</MenuItem>
        <MenuItem>About this conference</MenuItem>
        <MenuItem>Event Map</MenuItem>
        <MenuItem>Contact us</MenuItem>
      </MenuList>
    </Menu>
  )
}
