import client from  '../../conf'
import { SIGNUP_API } from '../../api'
import { SIGNUP_DATA } from '../../type'

export const signup = (data) => {
    return async dispatch => {
        return client().post(`${SIGNUP_API}`,data).then((res) => {
            console.log("xcv", res)
            dispatch({
                type : SIGNUP_DATA,
                data : res
            })
        }).catch((err) => {
            dispatch({
                type : SIGNUP_DATA,
                data : { status : 500 }
            })
        })
    }
}
export const setSignup = () => {
    return async dispatch => {
        dispatch({
            type : SIGNUP_DATA,
            data : {}
        })
    }
}