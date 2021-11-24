import React from 'react'
import loadingImage from '../images/loader.png'
import '../styles/Loader.css'

const Loader = () => {
    return (
        <div style={{marginTop: '100px'}}>
            <div style={{textAlign: 'center'}}>
                <img className='imageLoader' width='200px' src={loadingImage} alt='loading' />
            </div>
            <p style={{textAlign: 'center'}}>Loading...</p>
        </div>
    )
}

export default Loader
