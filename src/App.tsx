import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Head from './components/head/Head';
import DetailsPage from './Pages/DetailsPage';
import MainList from './Pages/MainList';

function App() {
  return (
    <div className=" bg-gray-200 w-full h-screen relative" >
      <Switch>
          <Route path="/Post/:id">
            <DetailsPage />
          </Route>
          <Route path="/">
            <MainList />
          </Route>
        </Switch>    
      </div>
  );
}

export default App;
