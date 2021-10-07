import './App.css';
import {Header, Footer, Main} from "./components";
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from "history";

function App() {
  return (
    <Router history = {createBrowserHistory}>
      <Header/>
      <Main/>
      <Footer/>
    </Router>
  );
}

export default App;
