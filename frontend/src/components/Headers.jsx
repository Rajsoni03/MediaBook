import React from 'react'
import {Link} from 'react-router-dom'

const Headers = () => {
  return (
    <div>
        <div className='duration-500'>
          <div className='flex flex-wrap justify-center inset-x-0 px-2 mt-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <Link to="/" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700'>Home</Link>
              <Link to="/login" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700'>Login</Link>
              {/* <Link to="/create" className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700'>Create</Link> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Headers