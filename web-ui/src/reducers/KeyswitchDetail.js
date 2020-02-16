import { isProductIdValid } from "../keyboard";

const defaultState = {productId: ''}

const keyswitchDetail = (state=defaultState, action) => {
    switch (action.type) {
        case 'SHOW_SW':
            if (isProductIdValid(action.productId)) {
                return Object.assign({}, state, {
                    productId: action.productId
                })
            }
            break;
        default:
            break;
    }
    return state;
}

export default keyswitchDetail;