import React, { useState } from 'react'
import { BsFillArrowDownCircleFill, BsPlusCircleFill } from 'react-icons/bs'

import {adduser} from "./index";
import Contactuser from './contactuser';

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { app } from '../config/firebase.config';


const Home = () => {

    const [filterMenu, setFilterMenu] = useState(false);
    const [newUser, setNewUser] = useState(false);

        const [inputs, setInputs] = useState([]);

        const [inputs2, setInputs2] = useState([]);
      
        const addInput = () => {
          setInputs((prevInputs) => [...prevInputs, ""]);
        };
        const addInput2 = () => {
            setInputs2((prevInputs) => [...prevInputs, ""]);
          };

          const navigate= useNavigate() 


          const logOut=()=>{ 
            const firebaseAuth=getAuth(app);
            firebaseAuth.signOut().then(()=>{
              window.localStorage.setItem("auth","false");
        
            }).catch((e) => console.log(e));
            navigate("/login",{replace:true})
          }


      
        const handleInputChange = (e, index) => {
          const newInputs = [...inputs];
          newInputs[index] = e.target.value;
          setInputs(newInputs);
        };

        const handleInputChange2 = (e, index) => {
            const newInputs = [...inputs2];
            newInputs[index] = e.target.value;
            setInputs2(newInputs);
          };


  return (
    <div className='flex flex-col gap-5 w-full'>
        <div className='bg-slate-300 p-7 basis-1/3 w-full '>
            <p className='text-3xl font-bold p-6 text-center '>Users list</p>
            
            <div className='flex flex-row items-center justify-between'>
            <div className='border-2 rounded-md border-white px-3 my-4  tracking-wide ' onClick={() => setFilterMenu(!filterMenu)}>
                <p className='text-base tracking-wide text-textColor flex font-semibold items-center gap-2'>
                Filter
                <BsFillArrowDownCircleFill className={`duration-150 transition-all ease-in-out ${filterMenu ? "rotate-180" : "rotate-0"}`} 
                
                />
                </p>
            </div>
            <div className='px-3 my-4'>
                <BsPlusCircleFill className={`text-xl hover:text-gray-700`} 
                onClick={() => setNewUser(!newUser)}
                />

            </div>
            <p className='border-2 rounded-md text-white border-white px-3 my-4 bg-slate-600' onClick={logOut}>LogOut </p>


            </div>
            <div className='bg-slate-400 p-5 rounded-md text-white'>
                <p className='text-white text-xl'>Name</p>
                <p className='text-white text-lg'>Email</p>
                <p className='text-white text-base'>Contact No</p>
                <div>
                    
                </div>
            </div>

        </div>
        
          {newUser ? 
          <>
          <div className='bg-slate-300 p-7 basis-1/3 rounded-md'>
          <p className='text-2xl font-bold mb-5'>New User details</p>

          <div className='flex flex-row items-start justify-center gap-2'>
          <div class="basis-1/4">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
            <input type="text" name="email" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                
                />

            <label for="email" className="block mb-2 text-sm font-medium text-gray-600">Mobile Number</label>
            <div className='flex flex-row gap-1'>
            <input type="text" name="email" className=" basis-2/5 block w-full  p-3 rounded bg-gray-200 border border-transparent focus:outline-none" placeholder='Name'/>
            <input type="tel" name="email" className="block w-full  p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
            </div>
            {inputs.map((value, index) => (
        <div className='flex flex-row gap-1'>
        <input type="text" name="email" className=" basis-2/5 block w-full  p-3 rounded bg-gray-200 border border-transparent focus:outline-none" placeholder='Name'
        key={index}
        value={value}
        onChange={(e) => handleInputChange(e, index)}
        />
        <input type="tel" name="email" className="block w-full  p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
        key={index}
        value={value}
        onChange={(e) => handleInputChange(e, index)}
        />
        </div>
      ))}
            
                
            <BsPlusCircleFill className={`text-xl hover:text-gray-700`} onClick={addInput}/>
            



          </div>
          <div class="basis-1/4">
            <label for="email" className="block mb-2 text-sm w-fullfont-medium text-gray-600">Name</label>
            <input type="text" name="email" className="block w-full   p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                
                />

            <label for="email" className="block mb-2 text-sm font-medium text-gray-600">Hobbies</label>
            
            <input type="text" name="email" className="block w-full  p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                
                />

        {inputs2.map((value, index) => (
            <div className='flex flex-row gap-1'>
            <input type="text" name="email" className="block w-full  p-3 rounded bg-gray-200 border border-transparent focus:outline-none" 
                
                key={index}
                value={value}
                onChange={(e) => handleInputChange2(e, index)}

                />
        </div>
      ))}



            <BsPlusCircleFill className={`text-xl hover:text-gray-700`} onClick={addInput2}/>
          </div>

          <div>
            <button className='bg-slate-400 p-3 rounded-md text-white' onClick={() => setNewUser(!newUser)}>Add User</button>
          </div>

          </div>

          </div>

          </>
          
          
          
          : null}
           

        

    
    </div>
  )
}

export default Home