import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar flex items-center justify-between p-8">

            <div className="logo">
                <hi className="venus text-xl font-medium text-gray-700">
                🌑 Venus
                </hi>
            </div>
            <ul className='flex gap-10 font-light text-sm align-middle items-center justify-center'>
                <li>Home</li>
                <li>About us</li>
                <li>Community Art</li>
                <li className='b rounded-xl bg-gray-950 text-gray-50 text-xs shadow-2xl p-[10px] font-semibold'>Sign Up</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar