import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Blog from './Components/Blog/Blog';
import MoreDetails from './Components/Services/MoreDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Homes from './Components/Home/Homes';
import Special from './Components/Special/Special';

export const userContext = createContext();


const App = () => {
  const [auths, setAuth] = useState({})
  console.log(auths)
  return (
    <BrowserRouter>
    <Navbar>

    </Navbar>
    <Switch>
    
    <userContext.Provider value={[auths, setAuth]}>
      <Route exact path="/">
       <Homes/>
      </Route>
    <Route path="/home">
      <Homes/>
      </Route>
      <Route path="/contact">
    <Contact></Contact>
      </Route>
      <PrivateRoute path="/services">
  <Services></Services>
      </PrivateRoute>
      <Route path="/about">
<About></About>
      </Route>
      <Route path="/moreDetails/:id">
           <MoreDetails></MoreDetails>
         </Route>
      <Route path="/login">  
      <Login></Login>
       </Route>
       <PrivateRoute path="/blog">  
      <Blog></Blog>
       </PrivateRoute>
       <PrivateRoute path="/special">  
     <Special></Special>
       </PrivateRoute>
       
       </userContext.Provider>
       <Route path="*">
        <NotFound></NotFound>
      </Route>
      
    </Switch>
     <Route path="/footer">
        <Footer></Footer>
      </Route> 
    </BrowserRouter>
  );
};

export default App;
