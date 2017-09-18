
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'

import Paper from '../assets/paper.svg'
import Scissor from '../assets/scissor.svg'
import Rock from '../assets/rock.svg'

const styles = (theme) => ({
  results: {
    display: 'flex',
  },
  player: {
    position: 'absolute',
    top: '50%',
    marginTop: -100,
  },
  winner: {
    left: -10,
    transform: 'rotate(90deg)',
  },
  loser: {
    right: -10,
    transform: 'rotate(-90deg)',
  },
  winnerName: {
    backgroundColor: theme.palette.secondary[500],
    padding: theme.spacing.unit,
  },
})

const loadImage = (choice = '') => {
  if (choice === 'rock') {
    return Rock
  } else if (choice === 'paper') {
    return Paper
  }

  return Scissor
}


const GameResults = ({ classes, result }) => (
  <div className={classes.results}>
    <div className={`${classes.player} ${classes.winner}`}>
      <img alt="winner" src={loadImage(result.winner.choice)} width={200} />
    </div>
    <div className={`${classes.player} ${classes.loser}`}>
      <img alt="loser" src={loadImage(result.loser.choice)} width={200} />
    </div>
    <Typography className={classes.winnerName} type="display1" align="center">
      { result.winner.name } wins
    </Typography>

  </div>
)

GameResults.propTypes = {
  classes: PropTypes.object,
  result: PropTypes.object,
}

export default withStyles(styles)(GameResults)
