import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { joinGame } from '../store/actions'

const styles = () => ({
  actions: {},
  button: {},
})

const ActionsButtons = ({ classes, joinGame, isConnected, users }) => (
  <div className={classes.actions}>
    <Button onClick={joinGame} disabled={isConnected} raised color="accent" className={classes.button}>
      Join to game
    </Button>
    { !isConnected && (users.length === 1) && (
      <Typography type="subheading" gutterBottom align="center">
        {users[0].name} is waiting
      </Typography>
    ) }
    { isConnected }
  </div>
)

ActionsButtons.propTypes = {
  classes: PropTypes.object,
  joinGame: PropTypes.func,
  isConnected: PropTypes.bool,
  users: PropTypes.array,
}

const enhanced = compose(
  withStyles(styles),
  connect((state) => ({
    isConnected: state.app.isConnected,
    users: state.app.users,
  }), { joinGame }),
)

export default enhanced(ActionsButtons)
