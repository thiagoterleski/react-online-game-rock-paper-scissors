import {
  UPDATE_USER,
  UPDATE_USERS,
  JOIN_GAME,
  SUBMMIT_FORM,
  CHOOSE_OPTION,
  PLAY_GAME,
} from '../types'

export const joinGame = () => ({
  type: JOIN_GAME.REQUEST,
})

export const updateUser = (users, id = null) => ({
  type: UPDATE_USER.SUCCESS,
  users: users,
  id: id,
})

export const updateUsers = (users) => ({
  type: UPDATE_USERS.SUCCESS,
  users: users,
})

export const submitForm = (data) => ({
  type: SUBMMIT_FORM.REQUEST,
  data: data,
})

export const chooseOption = (option) => ({
  type: CHOOSE_OPTION.REQUEST,
  option: option,
})

export const playGame = () => ({
  type: PLAY_GAME.REQUEST,
})

export const playResult = (result) => ({
  type: PLAY_GAME.SUCCESS,
  result: result,
})
