import { combineReducers } from 'redux'
// import { myDevice } from './myDevice'
import { toaster } from './toaster'
import { userInfo } from './userInfo'
import { projectInModal } from './projectInModal'

export const rootReducer = combineReducers({
  // myDevice,
  toaster,
  userInfo,
  projectInModal,
})