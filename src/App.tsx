import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import DetailsPage from './Pages/DetailsPage';
import MainList from './Pages/MainList';

function App() {
  return (
    <div className=" bg-gray-200 w-full h-auto relative top-50" >
      <Switch>
          <Route exact path="/post/:id">
            <DetailsPage />
          </Route>
          <Route exact path="/">
            <MainList />
          </Route>
        </Switch>    
      </div>
  );
}

export default App;
