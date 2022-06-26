export const InputStyles = {
  baseStyle: {
    field: {
      borderRadius: 'calc(0.25rem)',
      borderWidth: '1px',
      padding: '0 0.5rem',
      fontSize: '14px',
      lineHeight: 'normal',
      height: '32px',
    },
  },
  variants: {
    primary: (props) => ({
      field: {
        borderColor: 'grayMedium',
        _hover: {
          borderColor: props.colorMode === 'dark' ? 'white' : 'black',
        },
      },
    }),
  },
  defaultProps: {
    variant: 'primary',
    size: null,
  },
}
