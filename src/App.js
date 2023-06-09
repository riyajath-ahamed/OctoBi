import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Home, Login } from './components'

import { app, auth } from './config/firebase.config';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useStateValue } from './contex/StateProvider';
import { actionType } from './contex/reducer';
import { validateUser } from "./api";

const App = () => {

  const firbaseAuth = getAuth(app);
  const navigate = useNavigate();

  const [{user}, dispatch] = useStateValue();

  

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    firbaseAuth.onAuthStateChanged((userCred) => {
      //console.log(userCred)
      if (userCred) {
        userCred.getIdToken().then((token) => {
          //console.log(token);
          validateUser(token).then((data) => {
            //console.log(data);
            dispatch({
              type: actionType.SET_USER,
              user: data,
            })


          });
        });
      } else {
        setAuth(false);
        window.localStorage.setItem("auth", "false");
        dispatch({
          type: actionType.SET_USER,
          user: null,
        })
        navigate("/login");
      }
    });
  }, []);

  return(
    <div className="h-auto min-w-[680px] bg-primary flex justify-center items-center">
       <Routes>
       <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/*" element={<Home />} />
       </Routes>
       
    </div>
  )

 

  
}
export default App
