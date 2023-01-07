import {useState, useEffect} from 'react'


const lightColor = {borderBottom: '2px solid #fff'}
const darkColor = {borderBottom: '2px solid #0a0a0a'}

const Navbar = () => {


  const [homeColor, setHomeColor] = useState(lightColor)
  const [aboutColor, setAboutColor] = useState(lightColor)
  const [tryitColor, setTryitColor] = useState(lightColor)
  const [pricingColor, setPricingColor] = useState(lightColor)
  const [infoColor, setInfoColor] = useState(lightColor)
  const [footerColor, setFooterColor] = useState(lightColor)

  const [scrollY, setScrollY] = useState(0)
  
  
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
    console.log(scrollY)

    if (scrollY < 512) {
      setHomeColor(darkColor)
      setAboutColor(lightColor)
      setTryitColor(lightColor)
      setPricingColor(lightColor)
      setInfoColor(lightColor)
      setFooterColor(lightColor)
    }
    if (scrollY > 3935)  {
      setHomeColor(lightColor)
      setAboutColor(lightColor)
      setTryitColor(lightColor)
      setPricingColor(lightColor)
      setInfoColor(lightColor)
      setFooterColor(darkColor)
    }
    
    
    else if (scrollY > 3550) {
      setHomeColor(lightColor)
      setAboutColor(lightColor)
      setTryitColor(lightColor)
      setPricingColor(lightColor)
      setInfoColor(darkColor)
      setFooterColor(lightColor)
    }
    else if (scrollY > 1880) {
      setHomeColor(lightColor)
      setAboutColor(lightColor)
      setTryitColor(lightColor)
      setPricingColor(darkColor)
      setInfoColor(lightColor)
      setFooterColor(lightColor)
    }
    else if (scrollY > 872) {
      setHomeColor(lightColor)
      setAboutColor(lightColor)
      setTryitColor(darkColor)
      setPricingColor(lightColor)
      setInfoColor(lightColor)
      setFooterColor(lightColor)
    }
    else if (scrollY > 450) {
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