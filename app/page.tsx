import Contact from '@/components/Home/Contact'
import CTA1 from '@/components/Home/CTA1'
import CTA2 from '@/components/Home/CTA2'
import Hero from '@/components/Home/Hero'
import Hook from '@/components/Home/Hook'
import Hook2 from '@/components/Home/Hook2'
import Hook3 from '@/components/Home/Hook3'
import Rating from '@/components/Home/Rating'
import React from 'react'

function page() {
  return (
    <div className='px-4 md:px-8'>
      <Hero/>
      <Rating/>
      <Hook/>
      <CTA1/>
      <Hook2/>
      <Hook3/>
      <CTA2/>
      <Contact/>
    </div>
  )
}

export default page