import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionCartAdd } from "../../redux";

export const ItemCart = ({item, addItem, basket}) => {

    return(
        <div className="flex column spaceBetween width250px padding15 alignCenter">
            <h5>{item.title}</h5>
            <img width="70px" src="https://images.zakupka.com/i3/firms/27/48/48890/matovye-vkladki-fellowes-neato-v-korobki-simline-dlya-cd-dvd-diskov-f-84498_06174341e4f0b1e_200x200.jpg" alt="img"/>
            <span>{item.price}$</span>
            <p className="smallLetters heignt230px">{item.description}</p>
            {/* <button disabled={basket[item.id]} onClick={() => addItem(item.title, +item.price, item.id, item.description)} className= {basket[item.id] ? "disabletButton" : "darkButton whiteColor"}>Want!</button> */}
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     state: state,  
//     basket: state.basket
// });

// const mapDispatchToProps = (dispatch)=> bindActionCreators({
//     addItem: actionCartAdd,
// }, dispatch);


// export const CItemCart = connect(mapStateToProps, mapDispatchToProps)(ItemCart);