import React from 'react'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { ModeToggle } from './ModeToggle'
const Nav = () => {
  return (
    <nav className='container mx-auto w-full lg:w-3/4 flex items-center justify-between my-8'>
        <ModeToggle/>
         <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
    </nav>  
  )
}

export default Nav
