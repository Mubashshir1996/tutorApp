import { combineReducers } from 'redux'
import student from './student'
import loginData from './login'
import signupData from './signup'
import logoutData from './logout'

export const appreducer = combineReducers ({
    student, loginData, signupData, logoutData
})