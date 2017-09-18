import React from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui/styles'
import Main from './Main'
import { theme } from './config/Theme'
import configureStore from './store/createStore'
import rootSagas from './store/effects/sagas'

// eslint-disable-next-line
const initialState = window.__INITIAL_STATE__ || {}
const store = configureStore(initialState)

store.runSaga(rootSagas)

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  </Provider>
)


export default App
