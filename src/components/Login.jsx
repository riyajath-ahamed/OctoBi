import React, { useEffect, useState } from 'react';


import { app, auth } from '../config/firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { actionType } from '../contex/reducer';
import { useStateValue } from '../contex/StateProvider';
import { validateUser } from '../api';

const Login = ({setAuth}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [{user},dispatch] = useStateValue()
  
  
    const handleLogin = async () => {
      if(email !== null && password !== null) {
          signInWithEmailAndPassword(firebaseAuth, email, password)
          .then(() => {
          setAuth(true);
          window.localStorage.setItem("auth", "true");
  
          firebaseAuth.onAuthStateChanged((userCred) => {
            if (userCred) {
  
              userCred.getIdToken().then((token) => {
                validateUser(token).then((data)=> {
                  dispatch({
                    type:actionType.SET_USER,
                    user:data,
                  })
                })
              });
  
              navigate("/", { replace: true });
            } else {
              setAuth(false);
              dispatch({
                type:actionType.SET_USER,
                user:null,
              })
              navigate("/login");
            }
          });
              
          })
          .catch((err) => alert(err));
      }
  }
  


    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();
  
    
  
    useEffect(() => {
      if (window.localStorage.getItem("auth" === "true")) {
        navigate("/", { replace: true });
      }
    });

    
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <div className='rounded-md bg-slate-300 flex flex-col items-center justify-center p-4 gap'>
           <p className='text-3xl text-gray-600 font-semibold block ' > Login</p>
           <div className="mb-5">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                <input type="text" name="email" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                <input type="password" name="password" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow" 
            onClick={handleLogin}
            >Login</button>

        </div>

    </div>
  )
}

export default Login