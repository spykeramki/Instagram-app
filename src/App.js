
import { BrowserRouter, Route, Switch } from "react-router-dom"

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css';
import SignUpPage from "./components/SignUpPage"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/login' component={LoginPage} />
        <ProtectedRoute exact path='/' component={HomePage} />
        <ProtectedRoute exact path='/inbox' component={ChatPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
