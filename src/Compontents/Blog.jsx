import React from 'react'

export default function Blog() {
  return (
    <>
            <section className="py-22 md:py-42 bg-[url(https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png)]">
                <div className="flex justify-center">
                    <h2 className='font-bold text-4xl md:text-7xl py-10 text-indigo-950 '>Blog</h2>
                </div>
            </section>

            <section className="max-w-[75rem] mx-auto py-20 px-5 md:px-15">
      <div>
        <h1 className="text-5xl font-bold">New Arrivals</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20">

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
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                <div className='col-span-1 row-span-1 lg:col-span-2 lg:row-span-2'>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png" className='h-full w-full object-cover'></img>
                </div>

                <div className='row-span-1 lg:row-span-2'>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png" className='h-full w-full object-cover'></img>
                </div>

                <div>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png.webp" className='h-full w-full object-cover'></img>
                </div>

                <div>
                    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png.webp" className='h-full w-full object-cover'></img>
                </div>
                
            </div>
            </section>
    </>
  )
}
