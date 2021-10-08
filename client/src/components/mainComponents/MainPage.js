import { CItemCart } from ".";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { actionGetData, actionCartAdd, actionFilterData} from "../../redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const MainPage = ({items = [], getData, data, state, addItem, basket, searchItem}) => {


    const [page, changePage] = useState(0);
    const [sortType, changeType] = useState("1");
    const [searchValue, changeValue] = useState("");
    const history = useHistory();
    useEffect(() => {
        if(data.length === 0) {
            getData()
            return
        }
        else {
            searchItem(searchValue, sortType);
        }
    }, [searchValue, sortType, data, getData, searchItem]);


    return(
        <div className="flex column width100 relative alignCenter">
            <button onClick={() => console.log(state)}>state</button>
            <div className="flex spaceBetween width95 alignCenter">
                <div className="paddingOver15">
                    <input onChange={(e) => changeValue(e.target.value)} className="marginOver5 width250px" type="text" placeholder="Search"/>
                    <select onChange = {(e) => changeType(e.target.value)} className="marginOver5"> 
                        <option value="1">Cheaper</option>
                        <option value="2">More expensive</option>
                    </select>
                </div>
                <button onClick={() => history.push("/create")} className="darkButton whiteColor">Create</button>
            </div>
            <div className="flex wrap width100 jusifyCenter">
                {items.length > 0 && items[page].map((item) => 
                    <div  key = {item.id} className="flex column spaceBetween width250px padding15 alignCenter darkBorder">
                        <CItemCart item={item}/>
                         <button disabled={basket.data[item.id]} onClick={() => addItem(item.title, +item.price, item.id, item.description)} className= {basket.data[item.id] ? "disabletButton" : "darkButton whiteColor"}>Want!</button>
                    </div>
                )}
            </div>
            <div className="flex">
                {items.map((el, i) => <span key={i} className={`textCenter marginOver15px darkBorder width20 ${page === i ?  "disabletButton": "darkBackground whiteColor"}`} onClick = {() => changePage(i)}>{i+1}</span>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state,  
    data: state.data.data,
    items: state.data.filteredData,
    basket: state.basket,
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
    getData: actionGetData,
    addItem: actionCartAdd,
    searchItem: actionFilterData,
}, dispatch);


export const CMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);