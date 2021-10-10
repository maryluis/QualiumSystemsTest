import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionDelete } from "../../redux";


/// I use this big component for two routes - Edit and Create.

export const CreatePage = ({editData, deleteData, save}) => {

    const [titleValue, ChangeTitleValue] = useState(editData.title);
    const [priceValue, ChangePriceValue] = useState(editData.price);
    const [descriptionValue, ChangeDescValue] = useState(editData.description);
    const history = useHistory()

    useEffect(() => {
        /// I put the data for inputs at the Edit page to the reducer and take it then.
        if(history.location.pathname ==="/create") {
            // it's for case if you lokated at the edit page and then went to the create page.
            // The reducer will still have data from edit item and we have to delete it.
            ChangeTitleValue("");
            ChangePriceValue("");
            ChangeDescValue("");
            deleteData()
        } 
        if ((history.location.pathname ==="/edit") && (!titleValue || ! priceValue || !descriptionValue)) {
            // if you will reload Edit page it will send you to the main page, because it will not have data for edit.
            history.push("/")
        }
       
        return deleteData  // when this component will unmount we need to delete data item from the reducer
    }, [history.location.pathname])

    return(
        <div className="width100 flex jusifyCenter alignCenter">
            <form className="flex jusifyCenter alignCenter column width250px">
                <h4 className="width95 textCenter">{history.location.pathname ==="/create" ? "Create new item" : "Edit item"}</h4>
                {titleValue.length > 70 && <span className="smallLetters darkColor">Sorry, your title is too long</span>}
                <input onChange={(e) => ChangeTitleValue(e.target.value)} value={titleValue} className="width95 marginOver5 paddingOver5" type="text" placeholder="title"/>
                <input onChange={(e) => ChangePriceValue(e.target.value)} value={priceValue} className="width95 marginOver5 paddingOver5" type="number" placeholder="price"/>
                {descriptionValue.length > 600 && <span className="smallLetters darkColor">Sorry, your description shouldn't be more than 600 symbols</span>}
                <textarea onChange={(e) => ChangeDescValue(e.target.value)} value={descriptionValue} className="width95 marginOver5 paddingOver5" placeholder="description"/>
                <button disabled={!titleValue || !priceValue || !descriptionValue || descriptionValue.length > 600} 
                className={!titleValue || !priceValue || !descriptionValue || descriptionValue.length > 600 || titleValue.length > 70 ? "disabletButton" : "darkButton whiteColor" }
                onClick = {(e) => { 
                    e.preventDefault()
                    save(titleValue, priceValue, descriptionValue, editData.id) // this function is differend for different page
                    history.push("/")}}>Save</button>
            </form>
        </div>
    )
}


const mapStateToProps = (state) => ({
    editData: state.edit,
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    deleteData: actionDelete
}, dispatch);


export const CCreatePage = connect(mapStateToProps, mapDispatchToProps)(CreatePage);

