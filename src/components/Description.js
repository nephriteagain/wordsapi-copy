import React from 'react'

const Description = () => {
  return (
    <div className='desc-section row text-start' id='description'>
        <div className='col-md-4 col-12'>
            <h2 className='desc-desc'>Word API is Dictionary</h2>
            <p className='dec-text'>Use it to find defintions for more than 150,000 words. <br/>Try some: </p>
            <ul>
                <li><a>inevitable</a></li>
                <li><a>ascendancy</a></li>
                <li><a>boastful</a></li>
            </ul>
        </div>
        <div className='col-md-4 col-12'>
            <h2 className='desc-desc'>A Thesaurus</h2>
            <p className='dec-text'>You can find synonyms, anthonyms, or similar words <br/>Try some:</p>
            <ul className='desc-ul'>
                <li><a>fast</a></li>
                <li><a>warm</a></li>
                <li><a>violet</a></li>
            </ul>
        </div>
        <div className='col-md-4 col-12'>
            <h2 className='desc-desc'>And Much, Much More</h2>
            <p>Words API includes hierarchical information, such as knowing that:</p>
            <ul className='desc-ul'>
                <li>a <a>hatchback</a> is a type of <a>car</a></li>
                <li>a <a>finger</a> is a part of a <a>hand</a></li>
                <li><a>oxygen</a> is a substance of <a>water</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Description