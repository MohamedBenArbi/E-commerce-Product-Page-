import './App.css';
import plus from "./icon-plus.svg"
import minus from "./icon-minus.svg"
import cart from "./icon-cart.svg"

import logo from './logo.svg'
import avatar from './image-avatar.png'



import imm1 from './image-product-1.jpg'


import im1 from "./image-product-1-thumbnail.jpg"
import im2 from "./image-product-2-thumbnail.jpg"
import im3 from "./image-product-3-thumbnail.jpg"
import im4 from "./image-product-4-thumbnail.jpg"






function App() {
  return (
    <>
      <div className='flex items-center justify-center w-screen h-screen'>

        <nav className='fixed top-0 flex items-center justify-around w-screen h-16'>

          <div className='flex'>
            <div className='p-5'>
              <img src={logo} />
            </div>

            <div>

              <ul className='flex p-5 text-gray-500'>
                <a href='/'><li className='pr-2'>Collections</li></a>
                <a href='/'><li className='pr-2'>Men</li></a>
                <a href='/'><li className='pr-2'>Women</li></a>
                <a href='/'><li className='pr-2'>About</li></a>
                <a href='/'><li className='pr-2'>Contact</li></a>

              </ul>

            </div>
          </div>

          <div className='flex items-center justify-between'>
            <img src={cart} />
            <img src={avatar} className='h-10 pl-10' />

          </div>

        </nav>

        <div className='flex w-5/6 h-3/4'>


          <div className='flex flex-col items-center w-1/2 h-full justify-evenly '>
            <div className='flex items-center justify-center h-4/5'>
              <img src={imm1} className='rounded-xl h-4/5' />
            </div>

            <div className='flex items-center justify-center w-5/6 '>
              <div className='w-20 h-20 m-2 rounded-xl'>
                <img src={im1} className='rounded-xl border-[#fd7e1b] border-4' />
              </div>

              <div className='w-20 h-20 m-2 rounded-xl '>
                <img src={im2} className='rounded-xl' />
              </div>


              <div className='w-20 h-20 m-2 rounded-xl'>
                <img src={im3} className='rounded-xl' />
              </div>

              <div className='w-20 h-20 m-2 rounded-xl'>
                <img src={im4} className='rounded-xl' />
              </div>
            </div>

          </div>

          <div className='flex flex-col justify-around w-1/2 h-full p-10'>

            <div className='text-[#fd7e1b] font-bold tracking-wider p-5'>
              <p>SNEAKER COMPANY</p>
            </div>

            <div className='text-4xl font-bold'>
              <h1>Fall Limited Edition Sneakers</h1>

            </div>

            <div className='pt-5 pb-5 text-gray-500'>
              <p>These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole.they'll
                withstand everything the weather can offer. </p>

            </div>


            <div>
              <div className='flex items-center justify-start'><span className='pr-5 text-2xl font-bold'>$125.00</span> <span className='text-[#fd7e1b] font-bold'>50%</span></div>
              <div><span className='text-gray-500 line-through opacity-60'>$250.00</span></div>
            </div>

            <div className='flex items-center justify-around pt-5'>

              <img src={minus} />
              <span className='font-bold'>0</span>
              <img src={plus} />

              <div className='bg-[#fd7e1b] text-white w-1/2 h-[40px] flex items-center justify-center rounded-xl'>
                <img src={cart} />
                <button className='ml-3 font-bold'>Add to cart</button>

              </div>

            </div>

          </div>


        </div>


      </div>
    </>
  );
}

export default App;
