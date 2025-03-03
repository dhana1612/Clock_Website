import React from 'react'

export default function Footer() {
  return (
    <>

    <section className="max-w-[85rem] mx-auto text-white mt-10 px-5  ">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-15 pt-15  bg-red-600'>

          <div>
            <i className="fa-solid fa-box text-white pb-2 text-4xl"></i>
            <h1 className='font-bold text-xl pb-4'>Free shipping Method</h1>
            <p className='text-lg'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>

          <div>
            <i className="fa-solid fa-lock  text-white pb-2 text-4xl"></i>
            <h1 className='font-bold text-xl pb-4'>Secure Payment System</h1>
            <p className='text-lg'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>

          <div>
            <i className="fa-solid fa-recycle  text-white pb-2 text-4xl"></i>
            <h1 className='font-bold text-xl pb-4'>Secure Payment System</h1>
            <p className='text-lg'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
          </div>

      </div>
    </section>



    <section className="max-w-[85rem] mx-auto py-30 px-5">

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

      <div>
        <img src = "https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" className='pb-10'></img>
        <p className='text-lg text-slate-500'>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
      </div>

      <div className="grid grid-rows-4 gap-4">
        <h2 className='text-xl font-bold'>Quick Links</h2>
        <a href ="" className='text-slate-500'>About</a>
        <a href ="" className='text-slate-500'>Offers & Discounts</a>
        <a href ="" className='text-slate-500'>Get Coupon</a>
        <a href ="" className='text-slate-500'>Contact Us</a>
      </div>

      <div className="grid grid-rows-4 gap-4">
        <h2 className='text-xl font-bold'>New Products</h2>
        <a href ="" className='text-slate-500'>Woman Cloth</a>
        <a href ="" className='text-slate-500'>Fashion Accessories</a>
        <a href ="" className='text-slate-500'>Man Accessories</a>
        <a href ="" className='text-slate-500'>Rubber Made Toys</a>
      </div>

      <div className="grid grid-rows-4 gap-4">
          <h2 className='text-xl font-bold'>Support</h2>
          <a href ="" className='text-slate-500'>Frequently Asked Question</a>
          <a href ="" className='text-slate-500'>Terms & Conditions</a>
          <a href ="" className='text-slate-500'>Privacy policy</a>
          <a href ="" className='text-slate-500'>Report a Payment Issuse</a>
      </div>

    </div>


    <div className='pt-20 flex justify-between flex-wrap gap-y-4'>
      <div>
        <p className='text-slate-500'>Copyright ©2025 All rights reserved | This template is made with <span className='text-red-600'><i class="fa-solid fa-heart"></i></span> by <span className='text-red-600'>Colorlib</span></p>
      </div>

      <div>
        <i className="fa-brands fa-twitter pr-5"></i>
        <i className="fa-brands fa-facebook pr-5"></i>
        <i className="fa-solid fa-globe pr-5"></i>
        <i class="fa-brands fa-instagram pr-5"></i>
      </div>
    </div>

    </section>

    </>
  )
}
