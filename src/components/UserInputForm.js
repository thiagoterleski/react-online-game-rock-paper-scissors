import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'

const styles = () => ({
  gameContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  button: {},
})

class UserInputForm extends Component {

  // eslint-disable-next-line
  state = {
    name: '',
  }

  // eslint-disable-next-line
  handleChangeMultiline = event => {
    this.setState({
      multiline: event.target.value,
    })
  }

  // eslint-disable-next-line
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  // eslint-disable-next-line
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmitRequest(this.state)
  }

  render() {
    const { classes, visible } = this.props

    if (!visible) return null

    return (
      <form className={classes.container} onSubmit={this.handleSubmit} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          autoFocus
          placeholder="Type your name"
          onChange={this.handleChange('name')}
          margin="normal"
        />
      </form>
    )
  }
}

UserInputForm.propTypes = {
  classes: PropTypes.object,
  visible: PropTypes.bool,
  onSubmitRequest: PropTypes.func,
}

export default withStyles(styles)(UserInputForm)
