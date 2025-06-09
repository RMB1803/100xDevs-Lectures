import React from 'react'
import { Link } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='h-screen flex justify-center flex-col'>
      <div className='flex justify-center'>
        <div>
            <div className='text-3xl font-extrabold'>
                Create an Account
            </div>

            <div className='text-center text-slate-500 mt-2 text-md'>
                Already Have an account? 
                <Link className='underline' to={"/signin"}> Login </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
