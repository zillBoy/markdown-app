import React from 'react'

const Error = ({ errorMessage }) => {
    return (
        <div>
            <p style={{color: '#e95c5c'}}><strong>Error:</strong> {errorMessage}</p>
        </div>
    )
}

export default Error
