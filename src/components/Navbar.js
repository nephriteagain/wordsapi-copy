import React from 'react'



const Navbar = () => {





  return (
<div className='container'>
    <nav className='main-nav navbar navbar-expand-md navbar-lights'>
  <a href='#'className='navbar-brand h1'>WORDSAPI</a>
  <button 
    className='navbar-toggler'
    type='button'
    data-bs-toggle='collapse'
    data-bs-target='#toggleMobileMenu'
    aria-controls='toggleMobileMenu'
    aria-expanded='false'
    aria-label='Toggle navigation'
  >
  <span className='navbar-toggler-icon'></span>
  </button>
  <div className='collapse navbar-collapse' id='toggleMobileMenu'>
    <ul className='navbar-nav ms-auto me-0'>
      <li>
        <a className='nav-link' href='#'>Home</a>
      </li>
      <li>
        <a className='nav-link' href='#'>About</a>
      </li>
      <li>
        <a className='nav-link' href='#'>Try It</a>
      </li>
      <li>
        <a className='nav-link' href='#'>Pricing</a>
      </li>
      <li>
        <a className='nav-link' href='#'>Docs</a>
      </li>
      <li>
        <a className='nav-link' href='#'>Blogs</a>
      </li>
    </ul>
  </div>
</nav>
</div>
  )
}

export default Navbar