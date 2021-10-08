import {Route, Switch} from 'react-router-dom';
import { CCreatePage, CMainPage, CBasketPage } from './mainComponents';


export const Main = () => {

    return(
        <main className="marginBottom">
            <Switch>
                <Route path = "/" component = {CMainPage} exact/>
                <Route path = "/create" component = {CCreatePage}/>
                <Route path = "/basket" component = {CBasketPage}/>
                <Route path = "/edit" component = {CCreatePage}/>
            </Switch>
        </main>
    )
}