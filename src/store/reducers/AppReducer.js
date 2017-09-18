import {
  UPDATE_USER,
  UPDATE_USERS,
  JOIN_GAME,
  SUBMMIT_FORM,
  CHOOSE_OPTION,
  PLAY_GAME,
} from '../types'

const INITIAL_STATE = {
  users: [],
  currentId: null,
  isConnected: false,
  isPlaying: false,
  currentOption: '',
  result: {},
  isComplete: false,
  isFormInputVisible: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JOIN_GAME.REQUEST:
      return {
        ...state,
        isFormInputVisible: true,
      }
    case CHOOSE_OPTION.REQUEST:
      return {
        ...state,
        currentOption: action.option,
      }
    case JOIN_GAME.SUCCESS:
      return {
        ...state,
        isConnected: true,
      }
    case UPDATE_USER.SUCCESS:
      return {
        ...state,
        isConnected: true,
        currentId: action.id,
        users: action.users,
      }
    case UPDATE_USERS.SUCCESS:
      return {
        ...state,
        users: action.users,
      }
    case SUBMMIT_FORM.SUCCESS:
      return {
        ...state,
        isConnected: true,
      }
    case PLAY_GAME.REQUEST:
      return {
        ...state,
        isPlaying: true,
      }
    case PLAY_GAME.SUCCESS:
      return {
        ...state,
        result: action.result,
        isPlaying: false,
        isComplete: true,
      }
    default:
      return state
  }
}
