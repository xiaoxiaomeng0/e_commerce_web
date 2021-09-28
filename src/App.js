import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, creatUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  console.log("the current user is: ", currentUser);
  useEffect(() => {
    const callbackOnAuthChanged = async (user) => {
      if (user) {
        console.log("Before creating, Current User: ", currentUser);
        console.log("Before creating, user: ", user);
        const userSnap = await creatUserProfileDocument(user);
        console.log("userSnap.id: ", userSnap.id);
        setCurrentUser({
          id: userSnap.id,
          ...userSnap.data(),
        });
        console.log("Auth State Changed! Current User: ", currentUser);
      } else {
        setCurrentUser(null);
      }
    };

    unsubscribeFromAuth = onAuthStateChanged(auth, callbackOnAuthChanged);
    return unsubscribeFromAuth;
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
