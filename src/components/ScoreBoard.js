import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Clear from 'material-ui-icons/Clear'

const styles = (theme) => ({
  scoreBoardWrapper: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    bottom: theme.spacing.unit * 2,
  },
  scorePlayer: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreBoard: {
    boxShadow: theme.shadows[1],
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: theme.palette.secondary[500],
    padding: theme.spacing.unit,
  },
  icon: {
    width: (theme.spacing.unit * 4),
    height: (theme.spacing.unit * 4),
  },
  scoreValue: {
    fontSize: 22,
  },
  scoreValueLeft: { marginRight: theme.spacing.unit },
  scoreValueRight: { marginLeft: theme.spacing.unit },
})

// eslint-disable-next-line
const ScoreBoard = ({ classes, joinGame, isConnected, users }) => (users.length && isConnected) ? (
  <div className={classes.scoreBoardWrapper}>
    <div className={classes.scoreBoard}>
      <div className={classes.scorePlayer}>
        <Typography className={`${classes.scoreValue} ${classes.scoreValueLeft}`} type="button" align="center">
          00
        </Typography>
        <Typography type="subheading" align="center">
          {users[0].name}
        </Typography>
      </div>
      <span className={classes.divider}>
        <Clear className={classes.icon} />
      </span>
      <div className={classes.scorePlayer}>
        <Typography type="subheading" align="center">
          { users[1] ? users[1].name : 'wating' }
        </Typography>
        { users[1] && (
          <Typography className={`${classes.scoreValue} ${classes.scoreValueRight}`} type="button" align="center">
            00
          </Typography>
        ) }
      </div>
    </div>
  </div>
) : null

ScoreBoard.propTypes = {
  classes: PropTypes.object,
  joinGame: PropTypes.func,
  isConnected: PropTypes.bool,
  users: PropTypes.array,
}

export default withStyles(styles)(ScoreBoard)
