
import { BrowserRouter, Route, Switch } from "react-router-dom"

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import ChatPage from './components/ChatPage'
import ProtectedRoute from './components/ProtectedRoute'
import SignUpPage from "./components/SignUpPage"
import ProfilePage from "./components/ProfilePage"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/login' component={LoginPage} />
        <ProtectedRoute exact path='/' component={HomePage} />
        <ProtectedRoute exact path='/inbox' component={ChatPage} />
        <ProtectedRoute exact path='/spykeramki' component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
