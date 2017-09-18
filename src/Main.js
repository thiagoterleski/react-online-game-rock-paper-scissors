import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { grey } from 'material-ui/colors'
import { ActionsButtons, GameStage } from './components'
import Logo from './assets/logo.svg'

const styles = (theme) => ({
  '@global html, body': {
    height: '100%',
  },
  '@global body': {
    background: grey[100],
    padding: 0,
    margin: 0,
    overflow: 'hidden',
    fontSmoothing: 'antialiased',
  },
  'root': {
    height: '100vh',
    display: 'flex',
  },
  'sidebar': {
    background: theme.palette.primary[500],
    flex: 4,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      flex: 6,
    },
    [theme.breakpoints.up('md')]: {
      flex: 3,
    },
  },
  'box': {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  'top': {
    marginTop: theme.spacing.unit * 4,
  },
  'footer': {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  'content': {
    display: 'flex',
    flex: 8,
    [theme.breakpoints.down('sm')]: {
      flex: 6,
    },
    [theme.breakpoints.up('md')]: {
      flex: 9,
    },
  },
})

const MainLayout = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.sidebar}>
      <div className={`${classes.box} ${classes.top}`}>
        <img src={Logo} width={120} alt="logo" />
      </div>
      <div className={classes.box}>
        <Typography type="subheading" gutterBottom align="center">
          This is a realtime game made with React and Socket.io
        </Typography>
        <ActionsButtons />
      </div>
      <div className={`${classes.box} ${classes.footer}`}>
        <Typography type="body1" gutterBottom align="center">
          Rock-paper-scissors (also known as paper, rock, scissors or paper, scissors, stone)
          is a hand game usually played between two people, in which each player simultaneously
          forms one of three shapes with an outstretched hand.
        </Typography>
      </div>
    </div>
    <div className={classes.content}>
      <GameStage />
    </div>
  </div>
)


MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainLayout)
