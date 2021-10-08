function basketReducer(state, action) {

    let data = action.data || {};

    if(state === undefined){
        // if(localStorage.authToken && localStorage.basket) {
        //     state =  JSON.parse(localStorage.basket);
        // }
        // else { 
            state = {
                fullPrice: 0,
                fullCount: 0,
            }
        // }
    }

    if (action.type === "PUT_TO_BASKET") {
        debugger
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
                    count: ((state[data.id] ? state[data.id].count : 0) + 1  )},
                }
        };
    }

    // if (type === "CART_DELETE") {
    //     if((state[id].count - 1) === 0) {
    //         state = {
    //             ...state,
    //             price: state.price - price,       
    //         }
    //         delete state[id]
    //         state.price === 0 && delete state.price;
    //     } else {
    //         state = {
    //             ...state,
    //             price: state.price - price,
    //             [id] : {
    //                 price: price,
    //                 id: id,
    //                 description: description,
    //                 title: title,
    //                 count: (state[id].count - 1) 
    //             },

    //         }
    //     }

    // }
    // if (type === "CART_CLEAR") {
    //     state = {}
    // }
    // if(!state.price){
    //     localStorage.removeItem("basket");
    // } else {

    //     localStorage.basket = JSON.stringify(state)
    // }

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

const actionCartDelete = (title, price, id, description, image, count) => ({
    type: "CART_DELETE",
    data: {
        id: id,
        count: count,
        price: price,
        title: title,
        description: description
    }
});

// const actionCartClear = (count, price) => ({
//     type: "CART_CLEAR",
//     count,
//     price
// });

export {basketReducer, actionCartAdd, actionCartDelete, actionCartPut};