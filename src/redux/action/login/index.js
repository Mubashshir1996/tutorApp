import client from  '../../conf'
import { LOGIN_API } from '../../api'
import { LOGIN_DATA } from '../../type'

export const login = (data) => {
    return async dispatch => {
        return client().post(`${LOGIN_API}`,data).then((res) => {
            dispatch({
                type : LOGIN_DATA,
                data : res
            })
        }).catch((err) => {
            dispatch({
                type : LOGIN_DATA,
                data : { status : 500 }
            })
        })
    }
}


export const setLogin = () => {
    return async dispatch => {
        dispatch({
            type : LOGIN_DATA,
            data : {}
        })
    }
}

