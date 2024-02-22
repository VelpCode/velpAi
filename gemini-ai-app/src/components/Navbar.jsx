import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar flex mt-3 align-middle items-center justify-between p-5">
          <div className="logo text-3xl">TestGem</div>
          <ul className='d flex gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>AI Art</li>
                <li>Gemeni AI</li>
          </ul>
        </div>
    </div>

    
  )
}

export default Navbar