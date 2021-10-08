import {filterItems, filterPagination, sortByPrice} from "../tools";

function dataReducer(state, action) {
    if(state === undefined) {
        return(
            {
                data:[],
                filteredData: []
            }
        )
    }
    if(action.type === 'PUT_DATA') {
        return({
            data: [...action.payload],
            filteredData: filterPagination(sortByPrice(action.payload, 1))
        })
    } if(action.type === 'PUT_FILTERED_DATA') {
        return({
            data: state.data,
            filteredData: filterPagination(filterItems(action.data.string, sortByPrice(state.data, action.data.sortData)))
        })
    }
      return state;
}

const actionPutData = (payload) => {
    return(
        {type: 'PUT_DATA', payload})
};


const actionGetData = () => { 
    return(
    {type: 'GET_DATA'})
}

const actionFilterData = (filterString, sortData) => {
    return(
        {type: 'FILTER_DATA', data: { string: filterString, sortData: sortData}}
    )
}
const actionPutFilterData = (data) => {
    return(
        {type: 'PUT_FILTERED_DATA', data}
    )
}
    


export {dataReducer, actionPutData, actionGetData, actionFilterData, actionPutFilterData};