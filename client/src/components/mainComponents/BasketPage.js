import { CItemCart } from ".";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionCartAdd, actionCartClear, actionCartDelete} from "../../redux";
import { objToArr } from "../../tools";


export const BasketPage = ({items = [], addItem, basket, deleteItem, clearBasket}) => {

    return(
        <div className="flex column width100 alignCenter">
            {items.length > 0 ? 
            <div className="flex wrap width100 jusifyCenter">
                <div className="flex wrap width100 jusifyCenter">
                {items.length > 0 && items.map((item) => 
                    <div key = {item.id} className="flex column spaceBetween width250px padding15 alignCenter darkBorder">
                        <CItemCart item={item} key = {item.id}/>
                        <div className="flex alignCenter">
                        <button onClick={() => addItem(item.title, +item.price, item.id, item.description)} className="darkButton whiteColor">+</button>
                        <span className="paddingOver5">{item.count}</span>
                        <button onClick={() => deleteItem(item.title, +item.price, item.id, item.description)} className="darkButton whiteColor">-</button>
                        </div>
                    </div>
                )}
                </div>
                <div className="flex column alignCenter">
                    <h3>Total {basket.fullPrice}$ for {basket.fullCount} items</h3>
                    <button className="darkButton whiteColor" onClick={() => clearBasket()}>Clear</button>
                </div>
            </div>
            : 
            <div>
                <h5>Your basket is empty now. </h5>
            </div>}         
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
    deleteItem: actionCartDelete,
    clearBasket: actionCartClear,
}, dispatch);


export const CBasketPage = connect(mapStateToProps, mapDispatchToProps)(BasketPage);