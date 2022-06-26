/* eslint-disable quotes */
import { extendTheme } from '@chakra-ui/react'
import {
  ButtonStyles as Button,
  InputStyles as Input,
  LabelStyles as FormLabel,
} from './components'
import colors from './colors'
import { fonts, fontSizes } from './typography'
import { CustomStyles as styles } from './styles'

export const customTheme = extendTheme({
  colors,
  styles,
  fonts,
  fontSizes,
  components: {
    Button,
    Input,
    FormLabel,
  },
})
