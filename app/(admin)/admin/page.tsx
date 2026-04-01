
import React from 'react'

const page = () => {




  return (


    <div className='flex justify-center items-center h-screen'>
          <div className='bg-gray-100 p-8 rounded shadow-md w-full max-w-md text-black'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Log In Admin</h1>
            <form>
              <div>
                <label htmlFor="username">Username:</label>
                <input className='px-2 py-1.5 border border-gray-300 rounded w-full' type="text" id="username" name="username" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input className='px-2 py-1.5 border border-gray-300 rounded w-full' type="password" id="password" name="password" />
              </div>
              <div className='text-center mx-auto'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded my-5 ' type="submit">Log In</button>
              </div>
            </form>
          </div>
    </div>


  )
}

export default page