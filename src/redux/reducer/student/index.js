import { GET_STUDENT_DATA } from '../../store/type'

export default (state = {}, action) => {
    switch (action.type) {
        case GET_STUDENT_DATA :
            return {...state, student : action.data }
        default :
            return state
    }
}