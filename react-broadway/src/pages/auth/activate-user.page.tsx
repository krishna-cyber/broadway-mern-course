import { Button } from 'flowbite-react'
import React from 'react'
import { HiLogin } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

const UserActivate = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm lg:mt-24 text-center ">
            <h1 className="mb-4 text-2xl tracking-tight font-extrabold lg:text-7xl text-primary-600 dark:text-primary-500">User Activated.</h1>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                User has been activated successfully. You can now login to your account.
                 </p>
                 <NavLink to="/login">
                 <Button   className=' mx-auto  items-center' gradientDuoTone="greenToBlue">Back to Login
                    <HiLogin className="ml-2 h-5 w-5" />

                 </Button>
                    </NavLink>
        </div>   
    </div>
</section>
  )
}

export default UserActivate