import { take, put, call, fork, cancel, select } from 'redux-saga/effects'
import { testAip } from '../api/auth'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  TOAST_MESSAGE_SUCCESS,
  TOAST_MESSAGE_FAILURE,
  TOAST_MESSAGE_WARNING,
  LOADING_START,
  LOADING_STOP,
} from '../constants/actionTypes'
// ...
//loginFlow makes sure no token will be in the storage before waiting for the next login.

export function* authorize(name: string, password: string) {
  yield put({ type: LOADING_START })
  try {
    const token: any = yield call(testAip, name, password)
    yield put({ type: LOGIN_SUCCESS, payload: token })
    yield put({ type: TOAST_MESSAGE_SUCCESS, payload: 'Login success!' })
    yield put({ type: LOADING_STOP })

    // return token
  } catch (error) {
    console.log('catching error', error)
    yield put({ type: LOGIN_FAILURE, payload: error })
    yield put({ type: TOAST_MESSAGE_FAILURE, payload: 'Login failed!' })
    yield put({ type: LOADING_STOP })
  } finally {
    yield put({ type: LOADING_STOP })
    // if (yield cancelled()) {
    //   // ... put special cancellation handling code here
    // }
  }
}

export default function* loginFlow() {
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST)
    const { name, password } = payload
    const task = yield fork(authorize, name, password)
    const action = yield take(LOGOUT_REQUEST)
    if (action.type === LOGOUT_REQUEST) {
      yield cancel(task)
    }
    console.log('hi logout')
    // yield call(Api.clearItem, 'token')
  }
}
