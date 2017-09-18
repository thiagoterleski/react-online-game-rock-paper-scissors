import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import Paper from '../assets/paper.svg'
import Scissor from '../assets/scissor.svg'
import Rock from '../assets/rock.svg'

const styles = (theme) => ({
  gameControl: {
    display: 'flex',
  },
  choiceButton: {
    border: 0,
    backgroundColor: theme.palette.secondary[500],
    width: 128,
    height: 128,
    padding: 0,
    borderRadius: 64,
    boxShadow: theme.shadows[1],
    margin: theme.spacing.unit,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  choiceButtonActive: {
    backgroundColor: theme.palette.secondary[700],
  },
})

const GamePlay = (props) => {
  const {
    classes,
    chooseOptionRequest,
    currentOption,
    isPlaying,
  } = props

  if (!isPlaying) {
    return (
      <div className={classes.gameControl}>
        <button
          onClick={() => chooseOptionRequest('rock')}
          type="button"
          className={`${classes.choiceButton} ${(currentOption === 'rock') ? classes.choiceButtonActive : null}`}
        >
          <img src={Rock} alt="rock" width={64} height={64} />
        </button>
        <button
          onClick={() => chooseOptionRequest('paper')}
          type="button"
          className={`${classes.choiceButton} ${(currentOption === 'paper') ? classes.choiceButtonActive : null}`}
        >
          <img src={Paper} alt="paper" width={64} height={64} />
        </button>
        <button
          onClick={() => chooseOptionRequest('scissors')}
          type="button"
          className={`${classes.choiceButton} ${(currentOption === 'scissors') ? classes.choiceButtonActive : null}`}
        >
          <img src={Scissor} alt="scissors" width={64} height={64} />
        </button>
      </div>
    )
  }

  if (isPlaying) {
    return (
      <div className={classes.gameControl}>
        Go Motherfucjker
      </div>
    )
  }

  return null
}

GamePlay.propTypes = {
  classes: PropTypes.object,
  chooseOptionRequest: PropTypes.func,
  currentOption: PropTypes.string,
  isPlaying: PropTypes.bool,
}

export default withStyles(styles)(GamePlay)
