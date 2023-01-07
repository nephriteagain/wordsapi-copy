import React from 'react'

const Info = () => {
  return (
    <div className='info my-5' id='info'>
        <div className='info-docs'>
            <h3>Buy the Data - $629</h3>
            <p>If you'd prefer to host the data locally, <b>you can purchase the Words API data set</b>. Purchase of the Words API data set entitles you to use the data as much as you want, for as long as you want. Load the data directly into your app, make games with it, train an AI to take over the world with it.</p>
            <p>The only things you cannot do with the data are resell it, or use it in a service that competes directly with WordsAPI. And we'd really prefer you didn't use it to train an AI to take over the world.</p>
            <h4>Sample Data</h4>
            <p>The sample file contains a random selection of 10% of the full Words API data set.</p>
            <div className='info-button-div mt-3 mb-3'>
                <button className='btn btn-primary info-btn'>Download Sample</button>
            </div>
            <h4>How it Works</h4>
            <p>Let us know about your interested by emailing us at support@wordsapi.com. We'll send you an invoice via Paypal. Once payment is received, you'll receive a link to download the full data set.</p>
            <h3>What You'll Get</h3>
            <p className='mb-2'>The entire Words API data set in JSON format.</p>
            <ul className='info-ul'>
                <li>Over 325,000 words.</li>
                <li>45% with one or more definitions.</li>
                <li>56% with pronunciation information.</li>
                <li>44% with syllable information.</li>
                <li>18% with frequency of usage information.</li>
            </ul>
        </div>
    </div>
  )
}

export default Info