import React from 'react'

const Pricing = () => {
  return (
    <section className='pricing'>
        <div className='pricing-header mb-5'>
            <h2 className='mt-4 mt-5'>Monthly <b>Pricing</b> Plans</h2>
            <p>Account billing and access are handled by RapidAPI</p>
        </div>
        <div className='row align-items-center'>
            <div className='col-md-6 card align-self-center'>
                <h5 className='my-4 mt-5' ><b>BASIC</b></h5 >
                <p className='display-5 my-3'>
                    Free
                </p>
                <p className='mb-5'>5 my-3,500 request per Day</p>
                <button className='btn btn-dark btn-lg mt-4'>
                    Sign Up at RapidAPI
                </button>
            </div>

            <div className='col-md-6 card with-badge align-self-center'>
                <h5 className='my-4 mt-5' ><b>PRO</b></h5 >

                <div className='badge'>'</div>

                <p className='display-5 my-3'>
                    $10
                </p>
                <p className='mb-5'>25,000 request per Day</p>
                <button className='btn btn-success btn-lg mt-4'>
                    Sign Up at RapidAPI
                </button>
            </div>
            </div>

        <div className='row align-items-center'>
            <div className='col-md-6 card'>
                <h5 className='my-4 mt-5' ><b>ULTRA</b></h5 >
                <p className='display-5 my-3'>
                    $49
                </p>
                <p className='mb-5'>250,000 request per Day</p>
                <button className='btn btn-dark md-btn-lg mt-4'>
                    Sign Up at RapidAPI
                </button>
            </div>
            
            <div className='col-md-6 card'>
                <h5 className='my-4 mt-5' ><b>MEGA</b></h5 >
                <p className='display-5 my-3'>
                    $89
                </p>
                <p className='mb-5'>500,000 request per Day'</p>
                <button className='btn btn-dark btn-lg mt-4'>
                    Sign Up at RapidAPI
                </button>
            </div>
        </div>
    </section>
  )
}

export default Pricing