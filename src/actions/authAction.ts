import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../constants/actionTypes'

export const login = (name: string, password: string) => {
  const payload = { name, password }
  return { type: LOGIN_REQUEST, payload }
}

export const logout = () => {
  return { type: LOGOUT_REQUEST, payload: null }
}
