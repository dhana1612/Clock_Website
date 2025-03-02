import React from 'react'

export default function Home() {
  return (
   <>
  <section className='bg-black/10'>
      <div className="max-w-[75rem] mx-auto flex items-center">
        <div >
          <h1 className='font-bold text-8xl py-10 text-indigo-950 '>Select Your New Perfect Style</h1>
          <p className='text-2xl pb-10 '>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
          <button className="bg-black/65 text-white p-3 px-7 text-xl"> SHOP NOW</button>
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" className='pl-10 max-h-[55rem] max-w-[45rem]'></img>
        </div>
      </div>
      
  </section>


    <section className="max-w-[75rem] mx-auto pt-40">
      <div>
        <h1 className="text-5xl font-bold">New Arrivals</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20">
        <div>
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png.webp" className="pb-10"></img>
          <div className='justify-items-center'>
            <a href ="" className="text-2xl font-bold">Thermo Ball Etip Gloves</a>
            <p className="text-xl font-bold text-red-400">$ 45,743</p>
          </div>
        </div>
        <div>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png.webp" className="pb-10"></img>
        <div className='justify-items-center'>
            <a href ="" className="text-2xl font-bold">Thermo Ball Etip Gloves</a>
            <p className="text-xl font-bold text-red-400">$ 45,743</p>
          </div>
        </div>
        <div>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png.webp" className="pb-10"></img>
        <div className='justify-items-center'>
            <a href ="" className="text-2xl font-bold">Thermo Ball Etip Gloves</a>
            <p className="text-xl font-bold text-red-400">$ 45,743</p>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>

          <div className='row-span-1 xl:col-span-2 xl:row-span-2'>
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png"></img>
          </div>

          <div className='row-span-1 xl:row-span-2'>
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png"></img>
          </div>

          <div>
              <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png.webp"></img>
          </div>

          <div>
             <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png.webp"></img>
          </div>
          
      </div>
    </section>


    <section className='max-w-[85rem] mx-auto'>

      <div className='justify-items-center p-5'>
        <h1 className='font-bold text-5xl pt-46'>Popular Items</h1>
        <p className='pt-5 pb-16'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br></br> aliqua. Quis ipsum suspendisse ultrices gravida.</p>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        <div className='justify-items-center'>
          <img src='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png'></img>
          <div className='justify-items-center py-3'>
            <a href ="" className="text-2xl font-bold">Thermo Ball Etip Gloves</a>
            <p className="text-xl font-bold text-red-400">$ 45,743</p>
          </div>
        </div>

        <div className='justify-items-center'>
          <img src='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png'></img>
          <div className='justify-items-center py-3'>
            <a href ="" className="text-2xl font-bold">Thermo Ball Etip Gloves</a>
            <p className="text-xl font-bold text-red-400">$ 45,743</p>
          </div>
        </div>

        <div className='justify-items-center'>
          <img src='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png'></img>
          <div className='justify-items-center py-3'>
            <a href ="" className="text-2xl font-bold">Thermo Ball Etip Gloves</a>
            <p className="text-xl font-bold text-red-400">$ 45,743</p>
          </div>
        </div>

        <div className='justify-items-center'>
          <img src='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png'></img>
          <div className='justify-items-center py-3'>
            <a href ="" className="text-2xl font-bold">Thermo Ball Etip Gloves</a>
            <p className="text-xl font-bold text-red-400">$ 45,743</p>
          </div>
          
        </div>

        <div className='justify-items-center'>
          <img src='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png'></img>
          <div className='justify-items-center py-3'>
            <a href ="" className="text-2xl font-bold">Thermo Ball Etip Gloves</a>
            <p className="text-xl font-bold text-red-400">$ 45,743</p>
          </div>
        </div>

        <div className='justify-items-center'>
          <img src='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png'></img>
          <div className='justify-items-center py-3'>
            <a href ="" className="text-2xl font-bold">Thermo Ball Etip Gloves</a>
            <p className="text-xl font-bold text-red-400">$ 45,743</p>
          </div>
        </div>
      </div>


     <div className='flex justify-center py-15'>
          <button className='text-white text-lg font-semibold bg-red-600 p-6 '>VIEW MORE PRODUCTS</button>
     </div>
        
     
      

    </section>
    
      
  <section className='max-w-[85rem] mx-auto py-25'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

    <div>
        <h1 className='font-bold text-5xl pt-30 pb-10'>Watch of Choice</h1>
        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <button className='text-white text-lg font-semibold bg-red-600 p-5 mt-10'>SHOW WATCHES</button>
      </div>

      <div>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png"></img>
      </div>

    </div>
  </section>


  <section className='max-w-[85rem] mx-auto py-25'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>


    <div>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png"></img>
      </div>

      <div>
        <h1 className='font-bold text-5xl pt-30 pb-10'>Watch of Choice</h1>
        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <button className='text-white text-lg font-semibold bg-red-600 p-5 mt-10'>SHOW WATCHES</button>
      </div>

      

    </div>
  </section>
   

   </>
  )
}
