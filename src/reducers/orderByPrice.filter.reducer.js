import {CLEAR_ORDER_BY_PRICE, ORDER_BY_ASC, ORDER_BY_DESC} from "../actions/type";

export const orderByPriceReducer = (state = '', action) => {
    switch (action.type) {
        case ORDER_BY_ASC:
            return 'asc';
        case ORDER_BY_DESC:
            return 'desc';
        case CLEAR_ORDER_BY_PRICE:
            return '';
        default:
            return state;
    }
}
