import { ItemCart } from ".";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionGetData, actionCartAdd, actionFilterData} from "../../redux";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const MainPage = ({items = [], getData, state, addItem, basket, searchItem}) => {

    useEffect(() => getData(), [getData]);
    const history = useHistory();

    return(
        <div className="flex column width100 relative alignCenter">
            <button onClick={() => console.log(state)}>state</button>
            <div className="flex spaceBetween width95">
                <input onChange={(e) => searchItem(e.target.value)} className="marginOver5 width250px" type="text" placeholder="Search"/>
                <button onClick={() => history.push("/create")} className="darkButton whiteColor">Create</button>
            </div>
            <div className="flex wrap width100 jusifyCenter">
                {items.length > 0 && items.map((item) => 
                    <div  key = {item.id} className="flex column spaceBetween width250px padding15 alignCenter darkBorder">
                        <ItemCart item={item}/>
                         <button disabled={basket.data[item.id]} onClick={() => addItem(item.title, +item.price, item.id, item.description)} className= {basket.data[item.id] ? "disabletButton" : "darkButton whiteColor"}>Want!</button>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state,  
    items: state.data.filteredData,
    basket: state.basket
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    getData: actionGetData,
    addItem: actionCartAdd,
    searchItem: actionFilterData,
}, dispatch);


export const CMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);