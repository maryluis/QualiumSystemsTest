import { CItemCart } from ".";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionGetData, actionCartAdd } from "../../redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const MainPage = ({items = [], getData, pages,  data, state, addItem, basket, searchItem}) => {


    const [page, changePage] = useState(1);
    const [sortType, changeType] = useState("asc");
    const [searchValue, changeValue] = useState("");
    const history = useHistory();
    useEffect(() => {
        
            getData(page, searchValue, sortType)
            return

    }, [page, searchValue, sortType, getData]);


    return(
        <div className="flex column width100 relative alignCenter">
            <div className="flex spaceBetween width95 alignCenter">
                <div className="paddingOver15">
                    <input onChange={(e) => changeValue(e.target.value)} className="marginOver5 width250px" type="text" placeholder="Search"/>
                    <select onChange = {(e) => changeType(e.target.value)} className="marginOver5"> 
                        <option value="asc">Cheaper</option>
                        <option value="desc">More expensive</option>
                    </select>
                </div>
                <button onClick={() => history.push("/create")} className="darkButton whiteColor">Create</button>
            </div>
            <div className="flex wrap width100 jusifyCenter">
                {items.length > 0 && items.map((item) => 
                    <div  key = {item.id} className="flex column spaceBetween width250px padding15 alignCenter darkBorder">
                        <CItemCart item={item}/>
                         <button disabled={basket.data[item.id]} onClick={() => addItem(item.title, +item.price, item.id, item.description)} className= {basket.data[item.id] ? "disabletButton" : "darkButton whiteColor"}>Want!</button>
                    </div>
                )}
            </div>
            <div className="flex">
                <span className= {`textCenter marginOver15px darkBorder paddingOver5 ${page === 1 ? "whiteBackground" : "darkBackground whiteColor"}`} onClick={() => changePage(page - 1)}>
                    Prev
                </span>
                <span className= {`textCenter marginOver15px darkBorder paddingOver5 ${page === pages ? "whiteBackground" : "darkBackground whiteColor"}`} onClick={() => changePage(page + 1)}>
                    Next
                </span>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state,  
    pages: state.data.pages,
    items: state.data.data,
    basket: state.basket,
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    getData: actionGetData,
    addItem: actionCartAdd,
    // searchItem: actionFilterData,
}, dispatch);


export const CMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);