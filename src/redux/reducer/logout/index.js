import React from 'react'
import { LOGOUT_DATA } from '../../type'


export default (state = {}, action) => {
    switch (action.type) {
        case LOGOUT_DATA :
            console.log("logout values", action.data )
            return {...state, logoutData : action.data }
        default :
            return state
    }
}