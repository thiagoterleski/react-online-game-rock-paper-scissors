import io from 'socket.io-client'
import { eventChannel } from 'redux-saga'
import { takeEvery, fork, take, call, put } from 'redux-saga/effects'
import vars from '../../config/vars'
import { updateUser, updateUsers, playResult, playGame } from '../actions'

import {
  SUBMMIT_FORM,
  CHOOSE_OPTION,
  PLAY_GAME,
  UPDATE_USER,
  UPDATE_USERS,
} from '../types'

const socket = io(vars.serverURL)

/*
* Selector. The query depends by the state shape
*/
export const getState = (state) => state.app

// eslint-disable-next-line
function* subscribe() {
  // eslint-disable-next-line
  return new eventChannel(emit => {

    socket.on('user.join', (data) => {
      emit(updateUser(data, socket.id))
    })

    socket.on('users.join', (data) => {
      console.info('users.join')
      emit(updateUsers(data))
    })

    socket.on('user.update', (data) => {
      console.info('user.disconnect', data)
      emit(updateUsers(data))
    })

    socket.on('users.update', (users) => {
      console.info('users.update')
      emit(updateUsers(users))
    })

    socket.on('user.disconnect', (data) => {
      console.info('user.disconnect', data)
      emit(updateUsers(data))
    })

    socket.on('result', (result) => {
      console.info('result', result)
      emit(playResult(result))
    })

    socket.on('application.error', (result) => {
      // eslint-disable-next-line
      alert(result)
    })

    return () => {}
  })
  /*
  socket.on('error', (data) => {
    console.error(data)
  })

  socket.on('user.join', (data) => {
    yield call(updateUsers, data)
  })
  */
}

function* checkIsUsersReady(payload) {
  const usersFiltered = payload.users.filter((u) => u.choice !== '')
  const result = Boolean(usersFiltered.length === 2)

  if (result) {
    yield put(playGame())
  }
}

function* read() {
  const channel = yield call(subscribe)

  // eslint-disable-next-line
  while (true) {
    const action = yield take(channel)

    yield put(action)
  }
}

function joinGame(payload) {
  socket.emit('user.join', payload.data)
}

function chooseOption(payload) {
  socket.emit('user.choose', payload.option)
}

function playGameSaga() {
  socket.emit('play')
}

function* rootSagas() {
  yield fork(read)
  yield takeEvery(SUBMMIT_FORM.REQUEST, joinGame)
  yield takeEvery(CHOOSE_OPTION.REQUEST, chooseOption)
  yield takeEvery(UPDATE_USER.SUCCESS, checkIsUsersReady)
  yield takeEvery(UPDATE_USERS.SUCCESS, checkIsUsersReady)
  yield takeEvery(PLAY_GAME.REQUEST, playGameSaga)
}

export default rootSagas
