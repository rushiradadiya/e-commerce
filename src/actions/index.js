import {
    ADD_PRODUCT_TO_CART,
    REMOVE_PRODUCT_FROM_CART,
    INCREMENT_CART_ITEM_QUANTITY,
    DECREMENT_CART_ITEM_QUANTITY,
    ADD_BRAND_TO_FILTER,
    REMOVE_BRAND_FROM_FILTER,
    CLEAR_ORDER_BY_PRICE,
    ORDER_BY_ASC,
    ORDER_BY_DESC,
    COUNT_ITEM,
    GO_PAGE,
    NEXT_PAGE,
    PREV_PAGE
} from "./type";

export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
};

export const removeProductToCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    }
};

export const incrementCartQuantity = productId => {
    return {
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};

export const decrementCartQuantity = productId => {
    return {
        type: DECREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};



export const addBrandToFilter = brand => {
    return {
        type: ADD_BRAND_TO_FILTER,
        brand
    }
};


export const removeBrandFromFilter = brand => {
    return {
        type: REMOVE_BRAND_FROM_FILTER,
        brand
    }
};



export const orderByAsc = () => {
    return {
        type: ORDER_BY_ASC
    }
};

export const orderByDesc = () => {
    return {
        type: ORDER_BY_DESC
    }
};

export const clearOrderBy = () => {
    return {
        type: CLEAR_ORDER_BY_PRICE
    }
};





export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
};

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
};

export const goPage = (n) => {
    return {
        type: GO_PAGE,
        currentPage: n
    }
};

export const countItem = (n) => {
    return {
        type: COUNT_ITEM,
        totalItemsCount: n
    }
}
