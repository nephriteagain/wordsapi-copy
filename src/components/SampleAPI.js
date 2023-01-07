import React from 'react'

const SampleAPI = () => {
  return (
  
    
    
    <div className='sample-api-content' id='sample-api'>
          <div className='sample-api-background'></div>
            <div className='API-header'>
                <h3>Try It</h3>
            <p className='API-text'>Enter a word to lookup and what you want the API to return.</p>
            </div>
            
            <div className='row gx-5'>
              <div className='col-md-4 sample-api-left'>
                <div className='mb-4 main-input-div'>
                  <p className='API-text'>Enter a Word</p>
                    <div>
                      <input type="text" className="form-control" id="inputText" placeholder='example'/>
                    </div>
                  
                </div>
                <div className="dropup mb-4">
                  <button className="API-btn btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div className='btn-div mb-5'>
                  <button type="button" className="API-btn btn btn-success btn-lg">Success</button>
                </div>
              </div>


            <div className='col-md-8 sample-api-right'>
                <div className='URL-div mb-3'>
                  <p className='API-text'>Request URL</p>
                  <div className='URL-box'>https://wordsapiv1.p.mashape.com/words/dog</div>
                </div>
                <div className='response-div'>
                  <p className='API-text'>Response</p>
                  <div className='result-div'></div>
                </div>
            </div>
            </div>
        </div>
   
  )
}

export default SampleAPI