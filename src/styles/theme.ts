import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors:{
    primary:{
      700: '#996DFF'
    },
    secondy:{
      700: '#FBA94C'
    },
    green:{
      700: '#00875F',
      500: '#00B37E',
      300: '#04D361',
    },
    gray:{
      700:'#121214',
      600:'#202024',
      500:'#29292e',
      400:'#323238',
      300:'#7c7c8a',
      200:'#c4c4cc',
      100:'#e1e1e6',
    },
    yellow:{
      700: '#FFCA00',
      500: '#FFCF52'
    },
    white: '#FFFFFF'
  },
  fonts:{
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular'
  },
  fontSizes:{
    xs:12,
    sm:14,
    md:16,
    lg:20,
    xl:24,
  },
  sizes:{
    14:56
  }
});