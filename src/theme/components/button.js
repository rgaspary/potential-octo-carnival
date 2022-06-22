export const ButtonStyles = {
  baseStyle: {
    borderRadius: '2rem',
    fontWeight: '400',
    px: '4',
    lineHeight: '14px',
  },
  variants: {
    primary: (props) => ({
      bg: props.colorMode === 'dark' ? 'blueLight' : 'blueMedium',
      color: props.colorMode === 'dark' ? 'black' : 'white',
      _hover: {
        bg: props.colorMode === 'dark' ? 'blueMedium' : 'blueDark',
      },
    }),
    ghost: {
      bg: 'transparent',
      _hover: {
        bg: 'transparent',
      },
      _active: {
        bg: 'transparent',
      },
    },
  },
}
