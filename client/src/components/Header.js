import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Link } from "react-router-dom"

export const Header = ({basketPrice}) => {
    const navigation = [
        {title: "Main", path:"/"},
        {title: "Create", path:"/create"},
    ]
    return(
        <header className="height50 width100 flex spaceBetween alignCenter darkBackground whiteColor marginBottom">
            <nav>
                <ul className="noDecorationList flex noPadding">
                    {navigation.map(el => 
                        <li className="marginOver5" key = {el.title}>
                            <Link className="linkNoStyle whiteColor" to ={el.path}>{el.title}</Link>
                        </li>)}
                </ul>
            </nav>
            <Link className="linkNoStyle whiteColor paddingOver5 flex alignCenter" to="/basket">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-basket2-fill paddingOver5" viewBox="0 0 16 16">
                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"/>
                </svg>
                <span className="paddingOver5">{basketPrice} $</span>
            </Link>
        </header>
    )
}

const mapStateToProps = (state) => ({
    state: state,  
    basketPrice: state.basket.fullPrice 
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
}, dispatch);


export const CHeader = connect(mapStateToProps, mapDispatchToProps)(Header);