
function dataReducer(state = [], action) {

    if(action.type === 'PUT_DATA') {
            return([...action.payload])
    }
      return state;
}

const actionPutData = (payload) => {

    return({type: 'PUT_DATA', payload})};


const actionGetData = () => { 
    return(
    ({type: 'GET_DATA'}))
}
    


export {dataReducer, actionPutData, actionGetData};