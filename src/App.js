import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/product/:id">
          <Detail/>
        </Route>
        <Route exact path='/'>
          <Main/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
