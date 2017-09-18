import { createMuiTheme } from 'material-ui/styles'
import green from 'material-ui/colors/green'
import amber from 'material-ui/colors/amber'
import red from 'material-ui/colors/red'

export const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      ...amber,
    },
    error: red,
  },
})
