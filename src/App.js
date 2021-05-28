
import { BrowserRouter, Route, Switch } from "react-router-dom"

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import Header from './components/Header'
import ChatPage from './components/ChatPage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/inbox' component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
