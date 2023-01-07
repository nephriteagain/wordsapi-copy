import React from 'react'

const Landing = () => {
  return (
    <>
    <div className='landing' id='home'>
        <div className='landing-div'>
            <h1 className='text'>An API for the English Language</h1>
            <p className='text description'>FInd definitions, related words, and more, with a simple to use RESTful API</p>
            <div>
                <button className='btn btn-lg btn-light me-2 rounded-1'>Learn More</button>
                <button className='btn btn-lg btn-success mx-1 rounded-1'>Try it</button>
            </div>
        </div>
    </div>
    <div className='empty-container'></div>
    </>
  )
}

export default Landing