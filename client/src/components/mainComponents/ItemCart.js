import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionEdit } from "../../redux";
import { useHistory } from "react-router";
import { deleteItem, urlEdit } from "../../tools/";

export const ItemCart = ({item, editData}) => {

    const history = useHistory();

    return(
        <div className="flex column spaceBetween width250px padding15 alignCenter">
            <div className="flex spaceBetween width95">
                <button onClick={() => {editData(item)
                    history.push("/edit")}} className="green">Edit</button>
                <button onClick = {() => {
                    deleteItem(urlEdit(item.id))
                    window.location.reload()}} className="danger">Delete</button>
            </div>
            <h5>{item.title}</h5>
            <img width="70px" src="https://images.zakupka.com/i3/firms/27/48/48890/matovye-vkladki-fellowes-neato-v-korobki-simline-dlya-cd-dvd-diskov-f-84498_06174341e4f0b1e_200x200.jpg" alt="img"/>
            <span>{item.price}$</span>
            <p className="smallLetters heignt230px">{item.description}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    editData: actionEdit,
}, dispatch);


export const CItemCart = connect(mapStateToProps, mapDispatchToProps)(ItemCart);
