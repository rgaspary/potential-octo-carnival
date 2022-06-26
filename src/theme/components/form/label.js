export const LabelStyles = {
  baseStyle: {
    fontSize: '13px',
    margin: '0',
  },
  variants: {
    primary: (props) => ({
      color: props.colorMode === 'dark' ? '#fff9' : 'scrollbarThumb',
    }),
  },
  defaultProps: {
    variant: 'primary',
    size: null,
  },
}
