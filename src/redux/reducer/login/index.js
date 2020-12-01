import React from 'react'
import { LOGIN_DATA } from '../../type'


export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_DATA :
            return {...state, loginData : action.data }
        default :
            return state
    }
}