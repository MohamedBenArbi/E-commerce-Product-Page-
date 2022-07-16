import React from 'react'
import del from "./icon-delete.svg"

export default function Component1(props) {
    return (
        <div className=' h-[80px]  w-[300px] flex items-center justify-evenly bg-white p-5 m-5 rounded-xl text-gray-400 '>

            <div className=''>
                <img className='h-[60px] w-[60px] rounded-xl' src={props.img} />
            </div>

            <div className='flex flex-col'>
                <p>{props.desc}</p>
                <p>{props.price} DT x {props.qt} : {props.price * props.qt} DT  </p>

            </div>

            <button>            <img src={del} />
            </button>

        </div>

    )
}
