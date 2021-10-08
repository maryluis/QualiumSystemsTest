import {filterItems} from "../tools";

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
            filteredData: [...action.payload]
        })
    } if(action.type === 'PUT_FILTERED_DATA') {
        return({
            data: state.data,
            filteredData: filterItems(action.data, state.data)
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

const actionFilterData = (filterString) => {
    return(
        {type: 'FILTER_DATA', filterString}
    )
}
const actionPutFilterData = (data) => {
    return(
        {type: 'PUT_FILTERED_DATA', data}
    )
}
    


export {dataReducer, actionPutData, actionGetData, actionFilterData, actionPutFilterData};