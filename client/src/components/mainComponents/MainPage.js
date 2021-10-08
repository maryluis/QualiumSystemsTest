import { ItemCart } from ".";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionGetData, actionCartAdd} from "../../redux";
import { useEffect } from "react";

export const MainPage = ({items = [], getData, state, addItem, basket}) => {

    useEffect(() => getData(), [])

    return(
        <div className="flex column width100">
            <button onClick={() => console.log(state)}>state</button>
            <input className="marginOver5" type="text" placeholder="Search"/>
            <div className="flex wrap width100 jusifyCenter">
                {items.length > 0 && items.map((item) => 
                    <div  key = {item.id} className="flex column spaceBetween width250px padding15 alignCenter darkBorder">
                        <ItemCart item={item}/>
                         <button disabled={basket[item.id]} onClick={() => addItem(item.title, +item.price, item.id, item.description)} className= {basket[item.id] ? "disabletButton" : "darkButton whiteColor"}>Want!</button>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state,  
    items: state.data,
    basket: state.basket
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    getData: actionGetData,
    addItem: actionCartAdd,
}, dispatch);


export const CMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);