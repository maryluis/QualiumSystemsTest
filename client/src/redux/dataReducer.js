

function dataReducer(state, action) {
    if(state === undefined) {
        return []
    }
    if(action.type === 'PUT_DATA') {
        return { data: [...action.payload.items],
                pages: action.payload.pages};     
    } 
      return state;
}

const actionPutData = (payload) => {
    return(
        {type: 'PUT_DATA', payload})
};


const actionGetData = (page, query, sortType) => { 
    return(
    {type: 'GET_DATA', 
    data: {
        page: page,
        query: query,
        sortType: sortType
    }})
}



export {dataReducer, actionPutData, actionGetData};