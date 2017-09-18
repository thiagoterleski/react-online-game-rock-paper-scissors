export default {
  serverURL: (process.env.NODE_ENV === 'development') ? 'http://localhost:4001' : 'https://react-game-server.herokuapp.com/',
}
