import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import HatsPage from "./pages/hatspage/hatspage.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
