import React from 'react'
import Signup from './Signup';
import {Container} from 'react-bootstrap'
import {AuthProvider} from '../contexts/AuthContext'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import { auth } from '../fireabase';
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfie from './UpdateProfile'


function App() {
  return (
    <AuthProvider>
<Container className="d-flex align-itmes-center justify-content-center"
  style={{minHeight:'100vh'}}
  >
    <div className="w-100" style={{maxWidth:'400px'}}>
      <Router>
        <AuthProvider>
          <Switch>
           <PrivateRoute exact path="/" component={Dashboard}/>
           <PrivateRoute  path="/update-profile" component={UpdateProfie}/>
           <Route path="/signup" component={Signup}/> 
           <Route path="/login" component={Login}/>
           <Route path="/forgot-password" component={ForgotPassword}/>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  </Container>
    </AuthProvider>
  
  )
}

export default App;
