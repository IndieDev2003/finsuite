import React from 'react'

function Hero() {
  return (
    <section className='h-[80vh] flex flex-row justify-between items-center'>
        <div className='w-1/2'>
            <h1 className='text-6xl'>Maximixze <span></span><br/>
            Your <span> Fincancial</span> Potential
            </h1>
            <p>Welcome to FinSuite, where fincancial management meets<br/>  simplicity and efficiency.</p>
            <button className='bg-slate-700 text-white px-6 py-2 text-lg rounded-3xl mt-2'>Get Started</button>
        </div>
        <div className='h-full w-1/2 p-10'>
            <div className='border-gray-700 border-2 w-full h-full rounded-xl bg-gray-300 '>

            </div>
        </div>
    </section>
  )
}

export default Hero