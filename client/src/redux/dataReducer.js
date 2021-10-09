// import {filterItems, filterPagination, sortByPrice} from "../tools";

function dataReducer(state, action) {
    if(state === undefined) {
        return []
    }
    if(action.type === 'PUT_DATA') {
        return { data: [...action.payload.items],
                pages: action.payload.pages};     
    } 
    // if(action.type === 'PUT_FILTERED_DATA') {
    //     return({
    //         data: state.data,
    //         filteredData: filterPagination(filterItems(action.data.string, sortByPrice(state.data, action.data.sortData)))
    //     })
    // }
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

// const actionFilterData = (filterString, sortData) => {
//     return(
//         {type: 'FILTER_DATA', data: { string: filterString, sortData: sortData}}
//     )
// }
// const actionPutFilterData = (data) => {
//     return(
//         {type: 'PUT_FILTERED_DATA', data}
//     )
// }
    


export {dataReducer, actionPutData, actionGetData};