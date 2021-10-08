import { ItemCart } from ".";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionCartAdd} from "../../redux";
import { useEffect } from "react";
import { objToArr } from "../../tools";
import { ItemCart } from ".";

export const BasketPage = ({items = [], state, addItem, basket}) => {

    useEffect(() => getData(), [])

    return(
        <div className="flex column width100">
            <button onClick={() => console.log(state)}>state</button>
            <input className="marginOver5" type="text" placeholder="Search"/>
            <div className="flex wrap width100 jusifyCenter">
                {items.length > 0 && items.map((item) => 
                    <div className="flex column spaceBetween width250px padding15 alignCenter darkBorder">
                        <ItemCart item={item} key = {item.id}/>
                         <button disabled={basket.data[item.id]} onClick={() => addItem(item.title, +item.price, item.id, item.description)} className= {basket && basket.data[item.id] ? "disabletButton" : "darkButton whiteColor"}>Want!</button>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state,  
    items: objToArr(state.basket.data),
    basket: state.basket
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    addItem: actionCartAdd,
}, dispatch);


export const CMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);