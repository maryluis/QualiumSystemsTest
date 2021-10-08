import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { createNewItem, urlItems } from "../../tools";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionDelete } from "../../redux";

export const CreatePage = ({editData, deleteData}) => {

    const [titleValue, ChangeTitleValue] = useState(editData.title);
    const [priceValue, ChangePriceValue] = useState(editData.price);
    const [descriptionValue, ChangeDescValue] = useState(editData.description);
    const history = useHistory()

    useEffect(() => {
        return deleteData
    }, [deleteData])

    return(
        <div className="width100 flex jusifyCenter alignCenter">
            <form className="flex jusifyCenter alignCenter column width250px">
                <h4 className="width95 textCenter">{history.location.pathname ==="/create" ? "Create new item" : "Edit item"}</h4>
                {titleValue.length > 50 && <span className="smallLetters darkColor">Sorry, your title is too long</span>}
                <input onChange={(e) => ChangeTitleValue(e.target.value)} value={titleValue} className="width95 marginOver5 paddingOver5" type="text" placeholder="title"/>
                <input onChange={(e) => ChangePriceValue(e.target.value)} value={priceValue} className="width95 marginOver5 paddingOver5" type="number" placeholder="price"/>
                {descriptionValue.length > 600 && <span className="smallLetters darkColor">Sorry, your description shouldn't be more than 600 symbols</span>}
                <textarea onChange={(e) => ChangeDescValue(e.target.value)} value={descriptionValue} className="width95 marginOver5 paddingOver5" placeholder="description"/>
                <button disabled={!titleValue || !priceValue || descriptionValue || descriptionValue.length > 600} 
                className={!titleValue || !priceValue || !descriptionValue || descriptionValue.length > 600 || titleValue.length > 50 ? "disabletButton" : "darkButton whiteColor" }
                onClick = {(e) => { 
                    e.preventDefault()
                    createNewItem(titleValue, priceValue, descriptionValue, urlItems)
                    history.push("/main")}}>Save</button>
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