import { createMuiTheme } from '@material-ui/core/styles';
import { CommonColors } from '@material-ui/core/styles/createPalette';

const arcBlue = "#0B72B9"
const arcOrange = "#ffba60"
const arcGray = "#868686"

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      orange: string;
      blue: string;
      gray: string;
      learnButton: Object;
    };
  }
  
  interface ThemeOptions {
    custom?: {
      orange?: string;
      blue?: string;
      gray?: string;
      learnButton?: Object;
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    orange: string;
    blue: string;
    gray: string;
  }
}

const theme =  createMuiTheme({
  palette: {
    common: {
      orange: `${arcOrange}`,
      blue: `${arcBlue}`,
      gray: `${arcGray}`,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    }
  },
  typography: {
    h4: {
      fontWeight: 700,
      fontSize: '1.75rem',
      color: `${arcBlue}`,
    },
    h2: {
      color: `${arcBlue}`,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: `${arcGray}`,
    },
    
  },
  custom: {
    orange: `${arcOrange}`,
    blue: `${arcBlue}`,
    learnButton: {
      color: arcBlue,
      borderColor: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontWeight: 'bold',
    }
  },
})

export default theme