import './App.css';
import plus from "./icon-plus.svg"
import minus from "./icon-minus.svg"
import cart from "./icon-cart.svg"

import logo from './logo.svg'
import avatar from './image-avatar.png'
import { useEffect, useState } from 'react';

import Thumbnail from './Thumbnail';


import imm1 from "./image-product-1.jpeg"
import imm2 from "./image-product-2.jpeg"
import imm3 from "./image-product-3.jpeg"
import imm4 from "./image-product-4.jpeg"




import nt from "./icon-next.svg"
import bc from "./icon-previous.svg"







function App() {
  const [items, setitems] = useState([]);
  const [image, setimage] = useState(imm1);
  const [image1, setimagee] = useState(image);
  const [count, setcount] = useState(0);
  const [cr, setcart] = useState(0);



  useEffect(() => {
    setimagee(image)

  }, [image])

  function next() {

    switch (image1) {
      case imm1:
        setimagee(imm2);
        break;
      case imm2:
        setimagee(imm3);
        break;
      case imm3:
        setimagee(imm4);
        break;
      case imm4:
        setimagee(imm1);
        break;

    }


  }

  function back() {

    switch (image1) {
      case imm1:
        setimagee(imm4);
        break;
      case imm2:
        setimagee(imm1);
        break;
      case imm3:
        setimagee(imm2);
        break;
      case imm4:
        setimagee(imm3);
        break;

    }


  }

  function handleclick1() {
    setimage(imm1)
  }

  function handleclick2() {
    setimage(imm2)
  }

  function handleclick3() {
    setimage(imm3)
  }

  function handleclick4() {
    setimage(imm4)
  }


  function handleclick11() {
    setimagee(imm1)
  }

  function handleclick22() {
    setimagee(imm2)
  }

  function handleclick33() {
    setimagee(imm3)
  }

  function handleclick44() {
    setimagee(imm4)
  }

  function handle() {
    const el = document.getElementById("only");
    el.style.display = "block"
  }


  function handle2() {
    const el = document.getElementById("only");
    el.style.display = "none"
  }

  function show() {
    const el = document.getElementById("car");
    if (el.style.display == "block") {
      el.style.display = "none"

    }
    else {

      el.style.display = "block"


    }
  }



  function add() {
    setcount(count + 1)
  }

  function sub() {

    if (count > 0) setcount(count - 1)

  }


  function addcart() {

    setcart(cr + count)
    setcount(0)

  }
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
                <a href='/'><li className='pr-2 hover:text-black hover:font-bold' >Collections</li></a>
                <a href='/'><li className='pr-2 hover:text-black hover:font-bold'>Men</li></a>
                <a href='/'><li className='pr-2 hover:text-black hover:font-bold'>Women</li></a>
                <a href='/'><li className='pr-2 hover:text-black hover:font-bold'>About</li></a>
                <a href='/'><li className='pr-2 hover:text-black hover:font-bold'>Contact</li></a>

              </ul>

            </div>
          </div>

          <div className='flex items-center justify-between'>
            <button onClick={show}>
              <img src={cart} />
              <span className='text-[15px] absolute right-[305px] top-[15px] text-red-600 font-bold'>{cr}</span>
            </button>
            <img src={avatar} className='h-10 pl-10' />


            <div id='car' className='bg-gray-700 rounded-xl w-[350px] h-[300px] absolute top-[60px] right-[120px] hidden ' >
              <p>Cart</p>

              <div>
                <img src='' />

              </div>

            </div>

          </div>

        </nav>



        <div id='only' className='absolute hidden w-screen h-screen bg-black/50'>

          <div className='flex flex-col items-center justify-center mt-14' >

            <button className=' absolute top-[50px] left-[1020px] text-[50px] opacity-40 hover:opacity-100 outline-none' onClick={handle2}>X</button>

            <div className='flex items-center justify-center w-2/6 h-2/5'>
              <div className=' bg-white rounded-full h-[50px] w-[50px] mr-5 opacity-50 hover:opacity-100'>
                <button className='flex items-center justify-center outline-none h-[50px] w-[50px] ' onClick={back}><img className='' src={bc} /></button>

              </div>
              <img src={image1} className=' rounded-xl' />
              <div className='h-[50px] w-[50px] ml-5 bg-white rounded-full opacity-50 hover:opacity-100 '>
                <button className=' flex items-center justify-center outline-none h-[50px] w-[50px] ' onClick={next}><img className='' src={nt} /></button>

              </div>
            </div>

            <div className='flex items-center justify-center w-5/6 '>
              <Thumbnail source={imm1} handleclick={handleclick11} />
              <Thumbnail source={imm2} handleclick={handleclick22} />
              <Thumbnail source={imm3} handleclick={handleclick33} />
              <Thumbnail source={imm4} handleclick={handleclick44} />

            </div>




          </div>



        </div>



        <div className='flex w-5/6 h-3/4'>


          <div className='flex flex-col items-center w-1/2 h-full justify-evenly '>
            <div className='flex items-center justify-center h-4/5'>
              <button onClick={handle} className='outline-none h-4/5'>
                <img src={image} className='rounded-xl h-4/5 ' />
              </button>
            </div>

            <div className='flex items-center justify-center w-5/6 '>
              <Thumbnail source={imm1} handleclick={handleclick1} />
              <Thumbnail source={imm2} handleclick={handleclick2} />
              <Thumbnail source={imm3} handleclick={handleclick3} />
              <Thumbnail source={imm4} handleclick={handleclick4} />

            </div>

          </div>

          <div className='flex flex-col justify-around w-1/2 h-full p-10'>

            <div className='p-5 font-bold tracking-widest text-gray-400'>
              <p>NORDSTROM</p>
            </div>

            <div className='text-4xl font-bold'>
              <h1>Shelby Mid Chelsea Boot</h1>

            </div>

            <div className='pt-5 pb-5 text-gray-500'>
              <p>
                Minimalist construction means maximum versatility for a plain-toe Chelsea boot fitted with wide goring panels and a cushioned footbed for an easy-to-wear fit.
              </p>

            </div>


            <div>
              <div className='flex items-center justify-start'><span className='pr-5 text-2xl font-bold'>125.00 DT</span> <span className='font-bold text-gray-400'>50%</span></div>
              <div><span className='text-gray-500 line-through '>250.00 DT</span></div>
            </div>

            <div className='flex items-center justify-around pt-5'>

              <button onClick={sub}><img src={minus} /></button>
              <span className='font-bold'>{count}</span>
              <button onClick={add}> <img src={plus} /></button>

              <div className='bg-gray-700 text-white w-1/2 h-[40px] flex items-center justify-center rounded-xl'>
                <img src={cart} />
                <button onClick={addcart} className='ml-3 font-bold outline-none'>Add to cart</button>

              </div>

            </div>

          </div>


        </div>


      </div>
    </>
  );
}

export default App;
