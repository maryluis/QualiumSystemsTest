import {Route, Switch} from 'react-router-dom';
import { CreatePage, CMainPage, CBasketPage } from './mainComponents';


export const Main = () => {

    return(
        <main className="marginBottom">
            <Switch>
                <Route path = "/create" component = {CreatePage}/>
                <Route path = "/main" component = {CMainPage}/>
                <Route path = "/basket" component = {CBasketPage}/>
            </Switch>
        </main>
    )
}