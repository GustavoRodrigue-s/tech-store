export const theme = {
  colors: {
    primary: '#ff5151',
    primaryDark: '#cc4242',

    background: '#fafafa',

    black: '#000',
    black100: '#363636',

    white: '#fff',
    white100: '#f4f4f4',

    gray: '#787878',
    gray50: '#989898',
    gray100: '#d9d9d9',
    gray200: '#dbdbdb',
    gray300: '#eaeaea',

    green: '#219a2d',

    yellow: '#ffba07',

    orange: '#ff6b00',

    error: '#e50037',

    overlay: 'rgba(0, 0, 0, 0.15)',
  },
  sizes: {
    headlingOne: '7.2rem',
    headlingTwo: '6.4rem',
    headlingThree: '5.6rem',
    headlingFour: '4.8rem',
    headlingFive: '4.0rem',
    headlingSix: '3.6rem',
    headlingSeven: '3.2rem',

    big: '2.4rem',
    medium: '1.8rem',
    normal: '1.6rem',
    smaller: '1.4rem',
    semiSmaller: '1.2rem',
    small: '0.8rem',
  },
  weights: {
    light: 100,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  borders: {
    full: '9999px',
    large: '12px',
    medium: '8px',
    normal: '4px',
    small: '2px',
  },
  layers: {
    full: 99999,
    popover: 10,
    overlay: 5,
    header: 1,
  },
  fonts: {
    primary: 'Open Sans, Arial, sans-serif',
    secondary: 'Ubuntu, Arial, sans-serif',
  },
} as const;
