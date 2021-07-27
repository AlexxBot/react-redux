import rootSaga from "../sagas"

const counterReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENTAR':           
            return state + 1
        case 'DECREMENTAR':
            return state - 1
        default:
            return state
    }
}

export default counterReducer