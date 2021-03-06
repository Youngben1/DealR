import React, { useEffect } from 'react';
import './App.css';
import Feed from './Feed';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import { selectUser, logout, login } from "./features/userSlice";
import { auth } from './firebase';
import Widgets from './Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      {!user ?<Login /> : (
          <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
