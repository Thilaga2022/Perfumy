import React from 'react'

const Search = () => {
    return (
        <div style={{ marginTop: '5vh', textAlign: 'center' }}>
            <input style={{
                border: '1px solid #C27982',
                width: '70%', padding: '10px',borderRadius:'10px'
            }}
                type='text' placeholder='Search'></input>
        </div>
    )
}

export default Search
