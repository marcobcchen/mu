import { createMuiTheme } from '@material-ui/core/styles';
import { CommonColors } from '@material-ui/core/styles/createPalette';

const arcBlue = "#0B72B9"
const arcOrange = "#ffba60"

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      orange: string;
      blue: string;
    };
  }
  
  interface ThemeOptions {
    custom?: {
      orange?: string;
      blue?: string;
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    orange: string;
    blue: string;
  }
}

const theme =  createMuiTheme({
  palette: {
    common: {
      orange: `${arcOrange}`,
      blue: `${arcBlue}`,
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
      fontWeight: 300,
    },
  },
  custom: {
    orange: `${arcOrange}`,
    blue: `${arcBlue}`,
  },
})

export default theme