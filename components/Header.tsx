import React from 'react'

function Header() {
  return (
    <header className='flex flex-row px-4 md:px-8 justify-between items-center py-4'>
        <h2 className='text-xl'>FinSuite</h2>
        <ul className='hidden md:flex flex-row gap-8 text-gray-800'>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Pricing</li>
        </ul>
        <div className='flex flex-row gap-8'>
            <button>Login</button>
            <button className='px-4 py-2 bg-gray-900 text-white rounded-3xl'>Get Started</button>
        </div>
    </header>
  )
}

export default Header