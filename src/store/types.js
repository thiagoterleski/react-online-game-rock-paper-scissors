// eslint-disable-next-line no-unused-vars

const TYPES = [
  'REQUEST',
  'SUCCESS',
  'FAILURE',
  'CANCEL',
  'RESET',
]

const makeActionTypes = (base) => {
  const ref = {}

  TYPES.forEach((type) => {
    ref[type] = `${base}_${type}`
  })

  return ref
}

export const JOIN_GAME = makeActionTypes('JOIN_GAME')
export const SUBMMIT_FORM = makeActionTypes('SUBMMIT_FORM')
export const UPDATE_USER = makeActionTypes('UPDATE_USER')
export const UPDATE_USERS = makeActionTypes('UPDATE_USERS')
export const CHOOSE_OPTION = makeActionTypes('CHOOSE_OPTION')
export const PLAY_GAME = makeActionTypes('PLAY_GAME')
