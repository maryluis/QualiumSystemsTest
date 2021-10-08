function basketReducer(state, action) {

    let data = action.data || {};

    if(state === undefined){
        state = {
            fullPrice: 0,
            fullCount: 0,
            data: {},
        }
    }

    if (action.type === "PUT_TO_BASKET") {
        state = {
            ...state,     
            fullCount: (state.fullCount || 0) + 1,
            fullPrice: Math.round(((state.fullPrice + data.price ) + Number.EPSILON) * 100) / 100,
            price: data.price + (state.price || 0),
            data: {...state.data, 
                [data.id]:{ price: data.price,
                    id: data.id,
                    description: data.description,
                    title: data.title,
                    count: (state.data[data.id] ? state.data[data.id].count : 0) + 1  
                },
            },
        };
    }

    if (action.type === "DELETE_FROM_BASKET") {
        if((state.data[data.id].count - 1) === 0) {
            state = {
                ...state,
                fullCount: state.fullCount - 1,
                fullPrice: Math.round(((state.fullPrice - data.price ) - Number.EPSILON) * 100) / 100,
            }
            delete state.data[data.id];
            // state.fullPrice === 0 && delete state.price;
        } else {
            state = {
                ...state,
                fullCount: state.fullCount - 1,
                fullPrice: Math.round(((state.fullPrice - data.price ) + Number.EPSILON) * 100) / 100,   
                data:{...state.data,
                    [data.id]:{ price: data.price,
                        id: data.id,
                        description: data.description,
                        title: data.title,
                        count: (state.data[data.id] ? state.data[data.id].count : 0) - 1  
                    },  
                },
            }
        }
    }
    if (action.type === "CART_PUT_CLEAR") {
        state = {
            fullPrice: 0,
            fullCount: 0,
            data: {},
        }
    }


    return state;
}
    



const actionCartAdd = (title, price, id, description, count = 0) => { 
    return({
        type: "CART_ADD",
        data: {
            id: id,
            count: count,
            price: price,
            title: title,
            description: description         
        }
    })
};

const actionCartPut = ((data) => {
    return(
        {type: "PUT_TO_BASKET", data}
    )
})

const actionCartDelete = (title, price, id, description, count) => ({
    type: "CART_DELETE",
    data: {
        id: id,
        count: count,
        price: price,
        title: title,
        description: description
    }
});

const actionCartPutDelete = ((data) => {
    return(
        {type: "DELETE_FROM_BASKET", data}
    )
})

const actionCartClear = () => {
    return(
        {type: "CART_CLEAR"}
    )
};
const actionCartPutClear = () => {
    return(
        {type: "CART_PUT_CLEAR"}
    )
};

export {basketReducer, actionCartAdd, actionCartDelete, actionCartPut, actionCartPutDelete, actionCartPutClear, actionCartClear};