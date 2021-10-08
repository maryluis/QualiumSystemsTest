import { ItemCart } from ".";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionGetData } from "../../redux";
import { useEffect } from "react";

export const MainPage = ({items = [], getData}) => {

    useEffect(() => getData(), [])

    return(
        <div className="flex column width100">
            <input className="marginOver5" type="text" placeholder="Search"/>
            <div className="flex wrap width100 jusifyCenter">
                {items.length > 0 && items.map((item) => <ItemCart item={item} key = {item.id}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state,  
    items: state.data
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    getData: actionGetData,
}, dispatch);


export const CMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);