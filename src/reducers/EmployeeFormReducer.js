import EMPLOYEE_UPDATE from '../actions/types'

const INITIAL_STATE = {name: '', phone: '', shift: "monday"}

export default (INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value}
        default:
            return state
    }
}