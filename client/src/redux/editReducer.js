function editReducer(state, action) {
    if(state === undefined) {
        state = {
            title: "",
            price: "",
            description: ""
        }
    } else if(action.type === "PUT_EDIT") {
        state = {
            ...action.data
        }
    }
    else if(action.type === "PUT_DELETE") {
        state = {
            title: "",
            price: "",
            description: ""
        }
    }

    return state
}

const actionEdit = (data) => {
    return(
        {type: 'EDIT', data})
};

const actionPutEdit = (data) => {
    return(
        {type: "PUT_EDIT", data}
    )
}

const actionDelete = () => {
    return(
        {type: "DELETE"}
    )
}

const actionPutDelete = () => {
    return(
        {type: "PUT_DELETE"}
    )
}

export {actionDelete, actionPutEdit, actionPutDelete, actionEdit, editReducer}