import React from 'react';
import Home from './components/Home/Home';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCompanyManagerComponent from './components/ListCompanyManagerComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCompanyManagerComponent from './components/CreateCompanyManagerComponent';
import UpdateCompanyManagerComponent from './components/UpdateCompanyManagerComponent';
import ListInvestorComponent from './components/ListInvestorComponent';
import CreateInvestorComponent from './components/CreateInvestorComponent';
import MyProfile from './components/MyProfile';
function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                    <Route path = "/" exact component = {Home}></Route>
                          <Route path = "/CompanyManager" component = {ListCompanyManagerComponent}></Route>
                          <Route path = "/add-companymanager/_add" component = {CreateCompanyManagerComponent}></Route>
                          <Route path = "/update-companymanager/:companyManagerId" component = {UpdateCompanyManagerComponent}></Route>
                    </Switch>
                </div>
                <div className="container">
                    <Switch>
                      <Route path="/Investor" component = {ListInvestorComponent}></Route>
                      <Route path="/addInvestor" component = {CreateInvestorComponent}></Route>
                      <Route path="/MyProfile" exact component = {MyProfile}></Route>
                    </Switch>
                </div>
              <FooterComponent /> 
        </Router>
    </div>
    
  );
}

export default App;
