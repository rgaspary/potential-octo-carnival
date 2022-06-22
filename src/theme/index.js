/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components'
import colors from './colors'
import { fonts, fontSizes } from './typography'

export const customTheme = extendTheme({
  colors,
  fonts,
  fontSizes,
  components: {
    Button,
  },
})
