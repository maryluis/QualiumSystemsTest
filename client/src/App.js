import './App.css';
import {Provider} from 'react-redux';
import {store} from "./redux";
import {Header, Footer, Main} from "./components";
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from "history";

function App() {
  return (
    <Provider store = {store}>
      <Router history = {createBrowserHistory}>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
