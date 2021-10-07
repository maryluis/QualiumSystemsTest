import {Route, Switch} from 'react-router-dom';
import { CreatePage } from './mainComponents';


export const Main = ({}) => {

    return(
        <main>
            <Switch>
                <Route path = "/create" component = {CreatePage}/>
            </Switch>
        </main>
    )
}