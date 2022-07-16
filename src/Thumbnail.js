import React from 'react'


export default function Thumbnail({ source, handleclick }) {
    return (
        <div className='w-20 h-20 m-2 rounded-xl hover:opacity-60'>
            <button onClick={handleclick} className='focus:opacity-40 focus:border-4 focus:border-[#fd7e1b] rounded-xl outline-none'> <img src={source} className='rounded-xl' /></button>
        </div>
    )
}
