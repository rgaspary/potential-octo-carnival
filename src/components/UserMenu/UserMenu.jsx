import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import { urls } from '../../routes'
import { Link } from 'react-router-dom'

export const UserMenu = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton as={Button} variant="ghost" aria-label="navigation-menu">
            <HamburgerIcon
              aria-label={
                isOpen
                  ? 'close the navigation menu'
                  : 'open the navigation menu'
              }
            />
          </MenuButton>
          <MenuList color="black">
            <Link to={urls.LogInPage()}>
              <MenuItem>Log in</MenuItem>
            </Link>
            <Link to={urls.Calendar()}>
              <MenuItem>Events calendar</MenuItem>
            </Link>
            <Link to={urls.Map()}>
              <MenuItem>Event map</MenuItem>
            </Link>
            <Link to={urls.MoreInformation()}>
              <MenuItem>More information</MenuItem>
            </Link>
          </MenuList>
        </>
      )}
    </Menu>
  )
}
