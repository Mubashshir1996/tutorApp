import client from  '../../conf'
import { GET_DATA_API } from '../../store/api'
import { GET_STUDENT_DATA } from '../../store/type'

export const getData = () => {
    return async dispatch => {
        return client().get(`${GET_DATA_API}`).then((res) => {
            dispatch({
                type : GET_STUDENT_DATA,
                data : res
            })
        }).catch((err) => {
            dispatch({
                type : GET_STUDENT_DATA,
                data : { status : 100 }
            })
        })
    }
}