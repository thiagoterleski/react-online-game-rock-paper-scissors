import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import UserInputForm from './UserInputForm'
import { submitForm, chooseOption } from '../store/actions'
import ScoreBoard from './ScoreBoard'
import GamePlay from './GamePlay'
import GameResults from './GameResults'

const styles = () => ({
  gameContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  button: {},
})

class GameStage extends Component {

  // eslint-disable-next-line
  handleFormSubmit = (data) => {
    this.props.submitForm(data)
  }

  render() {
    const {
      classes,
      isConnected,
      isFormInputVisible,
      currentOption,
      users,
      currentId,
      isPlaying,
      result,
      isComplete,
    } = this.props

    return (
      <div className={classes.gameContent}>
        { !isFormInputVisible && !isConnected && (
          <Typography type="subheading" gutterBottom align="center">
            Waiting for a player
          </Typography>
        ) }
        { isConnected && (users.length === 1) && (
          <div>
            <LinearProgress color="accent" />
            <Typography type="subheading" gutterBottom align="center">
              You are conected, wait for other user
            </Typography>
          </div>
        ) }

        { isConnected && (users.length === 2) && !isComplete && (
          <GamePlay
            chooseOptionRequest={this.props.chooseOption}
            currentOption={currentOption}
            currentId={currentId}
            isPlaying={isPlaying}
          />
        ) }

        { isConnected && isComplete && (
          <GameResults
            result={result}
          />
        ) }

        <UserInputForm
          onSubmitRequest={this.handleFormSubmit}
          visible={isFormInputVisible && !isConnected}
        />

        <ScoreBoard isConnected={isConnected} users={users} />

      </div>
    )
  }
}

GameStage.propTypes = {
  classes: PropTypes.object,
  result: PropTypes.object,
  isConnected: PropTypes.bool,
  isFormInputVisible: PropTypes.bool,
  currentOption: PropTypes.string,
  users: PropTypes.array,
  currentId: PropTypes.string,
  isPlaying: PropTypes.bool,
  isComplete: PropTypes.bool,
  submitForm: PropTypes.func,
  chooseOption: PropTypes.func,
}

const mapStateToProps = (state) => ({
  isConnected: state.app.isConnected,
  users: state.app.users,
  isFormInputVisible: state.app.isFormInputVisible,
  currentOption: state.app.currentOption,
  currentId: state.app.currentId,
  isPlaying: state.app.isPlaying,
  isComplete: state.app.isComplete,
  result: state.app.result,
})

const enhanced = compose(
  connect(mapStateToProps, { submitForm, chooseOption }),
  withStyles(styles),
)

export default enhanced(GameStage)
