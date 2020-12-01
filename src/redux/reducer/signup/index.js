import React from 'react'
import { SIGNUP_DATA } from '../../type'


export default (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_DATA :
            console.log("signup values", action.data )
            return {...state, signupData : action.data }
        default :
            return state
    }
}