import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import jwt_decode from "jwt-decode";

const Index = () => {
  const [name, setname] = useState("")
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setname(jwt_decode(localStorage.getItem('token')).name)
      router.replace('/')
    }
    else {
      router.replace('/login')
    }
  }, [])

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login')
  }

  const router = useRouter();

  return (
    <>
      <div className='flex justify-end m-5'>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLogout}>
          Logout
        </button>

      </div>
      <p className='text-center text-5xl text-white'>
        Hello, {name}
      </p>
    </>
  )
}

export default Index