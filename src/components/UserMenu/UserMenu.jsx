import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import { urls } from '../../routes'
import { Link } from 'react-router-dom'

export const UserMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} variant="ghost" aria-label="navigation-menu">
        <HamburgerIcon />
      </MenuButton>
      <MenuList color="black">
        <MenuItem>Log in</MenuItem>
        <MenuItem>
          <Link to={urls.Calendar()}>Events calendar</Link>
        </MenuItem>
        <MenuItem>About this conference</MenuItem>
        <MenuItem>
          <Link to={urls.Map()}>Event Map</Link>
        </MenuItem>
        <MenuItem>Contact us</MenuItem>
      </MenuList>
    </Menu>
  )
}
