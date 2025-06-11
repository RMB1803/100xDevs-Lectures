import { Link, useNavigate } from 'react-router-dom'
import LabelledInput from './LabelledInput'
import { useState } from 'react'
import type { SignupInput } from '@ram18/medium-blog'
import axios from 'axios'
import { BACKEND_URL } from '../config'

const Auth = ({type}: {type: "signup" | "signin"}) => {

  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  })

  const navigate = useNavigate()

  const sendRequest = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`, postInputs)
      const jwt = response.data.jwt

      localStorage.setItem("token", jwt)
      navigate("/blogs")
    } catch (error) {
      
    }
  }

  return (
    <div className='h-screen flex justify-center flex-col'>
      <div className='flex justify-center'>
        <div>
          <div className='px-10'>
            <div className='text-3xl font-extrabold'>
                Create an Account
            </div>

            <div className='text-center text-slate-500 mt-2 text-md'>
              {type === "signin" ? "Don't have an Account?" : "Already have an Account?"}
              <Link className='underline ml-1' to={type === "signin" ? "/signup" : "/signin"}> 
                {type === "signin" ? "Sign Up" : "Login"}
              </Link>
            </div>
          </div>

          {type === "signup" ? 
            <LabelledInput label='Name' placeholder='Enter your Name' onChange={(e) => {
              setPostInputs({...postInputs, name: e.target.value})
            }}/> : null
          }

          {/* <LabelledInput label='Name' placeholder='Enter your Name' onChange={(e) => {
            setPostInputs({...postInputs, name: e.target.value})
          }}/> */}

          <LabelledInput label='Email' placeholder='xyz@example.com' type='email' onChange={(e) => {
            setPostInputs({...postInputs, email: e.target.value})
          }}/>

          <LabelledInput label='Password' placeholder='Enter your password' type='password' onChange={(e) => {
            setPostInputs({...postInputs, password: e.target.value})
          }}/>

          <button onClick={sendRequest} type="button" className="w-full mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            {type === "signin" ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
