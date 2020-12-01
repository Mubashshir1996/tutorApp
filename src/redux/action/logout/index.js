import client from  '../../conf'
import { LOGOUT_API } from '../../api'
import { LOGOUT_DATA } from '../../type'

export const logout = (data) => {
    return async dispatch => {
        return client().post(`${LOGOUT_API}`,data).then((res) => {
            dispatch({
                type : LOGOUT_DATA,
                data : res
            })
        }).catch((err) => {
            dispatch({
                type : LOGOUT_DATA,
                data : { status : 500 }
            })
        })
    }
}