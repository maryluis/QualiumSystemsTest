import {Route, Switch} from 'react-router-dom';
import {createNewItem, editItemPut} from "../tools";
import { CCreatePage, CMainPage, CBasketPage } from './mainComponents';


export const Main = () => {

    return(
        <main className="marginBottom">
            <Switch>
                <Route path = "/" component = {CMainPage} exact/>
                <Route path = "/create" component = {() => <CCreatePage save = {createNewItem} title = "Create new Item"/>}/>
                <Route path = "/basket" component = {CBasketPage}/>
                <Route path = "/edit" component = {() => <CCreatePage save = {editItemPut} title = "Edit Item"/>}/>
            </Switch>
        </main>
    )
}