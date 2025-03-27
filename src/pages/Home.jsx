import React from 'react'

export default function Home() {
  return (
    <>
      <div className='max-w-[1320px] mx-auto lg:flex-row flex-col flex items-center justify-between py-[50px] gap-[20px] p-[15px]'>
        <div className='lg:w-[50%]'>
          <h1 className='lg:text-6xl md:text-4xl text-4xl font-bold'>The experience makes all the difference.</h1>
          <p className='my-[20px]'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
          <button className='py-[10px] px-[20px] bg-red-500 rounded-[10px] text-white'>Get started</button>
          <button className='py-[10px] px-[20px] border-[1px] border-gray-500 ml-[20px] rounded-[10px]'>Offers</button>
        </div>
        <div className='lg:w-[40%] w-[100%]'>
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
        </div>
      </div>
      <div>
        <h1 className='text-center text-4xl mb-[50px] font-semibold'>Shop By Category</h1>

        <div className='my-[20px] flex md:flex-row lg:flex-col lg:justify-center flex-wrap gap-[30px] h-[800px]'>
          <div className='lg:w-[31%] w-[100%] flex lg:h-[100%] h-[35%] justify-center bg-[url("https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png")] bg-no-repeat bg-cover bg-center'>
            <button className='self-end bg-amber-100 w-[150px] mb-[20px] py-[10px]'>Women</button>
          </div>
          <div className='lg:w-[31%] w-[100%] lg:h-[100%] h-[30%]'>
            <div className='w-[100%] h-[48%] flex justify-center mb-[30px] bg-[url("https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png")] bg-no-repeat bg-cover bg-center'>
              <button className='self-end bg-amber-100 w-[150px] mb-[20px] py-[10px]'>Shoes</button>
            </div>
            <div className='w-[100%] h-[48%] flex justify-center bg-[url("https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png")] bg-no-repeat bg-cover bg-center'>
              <button className='self-end bg-amber-100 w-[150px] mb-[20px] py-[10px]'>Watches</button>
            </div>
          </div>
          <div className='lg:w-[31%] w-[100%] lg:h-[100%] h-[30%] flex justify-center bg-[url("https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png")] bg-no-repeat bg-cover bg-center'>
            <button className='self-end bg-amber-100 w-[150px] mb-[20px] py-[10px]'>Accessories</button>
          </div>
        </div>
      </div>
    </>
  )
}
