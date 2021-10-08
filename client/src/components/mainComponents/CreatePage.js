import { useState } from "react";
import { createNewItem, urlItems } from "../../tools";

export const CreatePage = ({}) => {

    const [titleValue, ChangeTitleValue] = useState("");
    const [priceValue, ChangePriceValue] = useState(0);
    const [descriptionValue, ChangeDescValue] = useState("");


    return(
        <div className="width100 flex jusifyCenter alignCenter">
            <form className="flex jusifyCenter alignCenter column width250px">
                <h4 className="width95 textCenter">Create new item</h4>
                <input onChange={(e) => ChangeTitleValue(e.target.value)} className="width95 marginOver5 paddingOver5" type="text" placeholder="title"/>
                <input onChange={(e) => ChangePriceValue(e.target.value)} className="width95 marginOver5 paddingOver5" type="number" placeholder="price"/>
                <textarea onChange={(e) => ChangeDescValue(e.target.value)} className="width95 marginOver5 paddingOver5" placeholder="description"/>
                <button className="darkButton whiteColor" onClick = {(e) => { 
                    e.preventDefault()
                    createNewItem(titleValue, priceValue, descriptionValue, urlItems)}}>Save</button>
            </form>
        </div>
    )
}