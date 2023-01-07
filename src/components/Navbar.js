import {useState, useEffect} from 'react'


const lightColor = {borderBottom: '2px solid #fff'}
const darkColor = {borderBottom: '2px solid #0a0a0a'}

const Navbar = () => {
  
  const [scrollY, setScrollY] = useState(0)

  const [homeColor, setHomeColor] = useState(lightColor)
  const [aboutColor, setAboutColor] = useState(lightColor)
  const [tryitColor, setTryitColor] = useState(lightColor)
  const [pricingColor, setPricingColor] = useState(lightColor)
  const [infoColor, setInfoColor] = useState(lightColor)
  const [footerColor, setFooterColor] = useState(lightColor)


  
  useEffect(()=> {
    function handleScroll() {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.addEventListener('scroll', handleScroll)
    }

  }, [])

  useEffect(()=> {


    const homePosition = document.getElementById('home').offsetTop
    const aboutPosition = document.getElementById('description').offsetTop
    const tryitPosition = document.getElementById('sample-api').offsetTop
    const pricingPosition = document.getElementById('pricing').offsetTop
    const infoPosition = document.getElementById('info').offsetTop
    const footerPosition = document.getElementById('blogs').offsetTop

    

    if ((scrollY) <= homePosition) {
      setHomeColor(darkColor)
      setAboutColor(lightColor)
      setTryitColor(lightColor)
      setPricingColor(lightColor)
      setInfoColor(lightColor)
      setFooterColor(lightColor)
    }
    if (scrollY + 800 > footerPosition)  {
      setHomeColor(lightColor)
      setAboutColor(lightColor)
      setTryitColor(lightColor)
      setPricingColor(lightColor)
      setInfoColor(lightColor)
      setFooterColor(darkColor)
    }
    
    
    else if (scrollY + 320 > infoPosition) {
      setHomeColor(lightColor)
      setAboutColor(lightColor)
      setTryitColor(lightColor)
      setPricingColor(lightColor)
      setInfoColor(darkColor)
      setFooterColor(lightColor)
    }
    else if (scrollY +205 > pricingPosition) {
      setHomeColor(lightColor)
      setAboutColor(lightColor)
      setTryitColor(lightColor)
      setPricingColor(darkColor)
      setInfoColor(lightColor)
      setFooterColor(lightColor)
    }
    else if (scrollY + 242 > tryitPosition) {
      setHomeColor(lightColor)
      setAboutColor(lightColor)
      setTryitColor(darkColor)
      setPricingColor(lightColor)
      setInfoColor(lightColor)
      setFooterColor(lightColor)
    }
    else if (scrollY + 174 > aboutPosition) {
      setHomeColor(lightColor)
      setAboutColor(darkColor)
      setTryitColor(lightColor)
      setPricingColor(lightColor)
      setInfoColor(lightColor)
      setFooterColor(lightColor)
    }
    

  }, [scrollY])



  return (
<div className='container' >
    <nav className='main-nav navbar navbar-expand-md navbar-lights' id='navbar'>
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
      <li id='nav-home' style={homeColor}>
        <a className='nav-link' href='#'>Home</a>
      </li>
      <li id='nav-about' style={aboutColor}>
        <a className='nav-link' href='#description'>About</a>
      </li>
      <li id='nav-tryit' style={tryitColor}>
        <a className='nav-link' href='#sample-api'>Try It</a>
      </li>
      <li id='nav-pricing' style={pricingColor}>
        <a className='nav-link' href='#pricing'>Pricing</a>
      </li>
      <li id='nav-info' style={infoColor}>
        <a className='nav-link' href='#info'>Docs</a>
      </li>
      <li id='footer' style={footerColor}>
        <a className='nav-link' href='#blogs'>Blogs</a>
      </li>
    </ul>
  </div>
</nav>
</div>
  )
}

export default Navbar