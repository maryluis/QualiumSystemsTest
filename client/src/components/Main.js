import {Route, Switch} from 'react-router-dom';
import { CreatePage } from './mainComponents';
import {CMainPage} from "./mainComponents";


export const Main = ({}) => {

    return(
        <main className="marginBottom">
            <Switch>
                <Route path = "/create" component = {CreatePage}/>
                <Route path = "/main" component = {CMainPage}/>
            </Switch>
        </main>
    )
}