import React from 'react'
import Products from '../products/Products'
import Categories from '../category-list/Category-List'
import Hero from '../hero/Hero'

const Main = () => {
  return (
    <main className='site_main'>
      <Hero />
      <Categories />
      <Products />
    </main>
  )
}

export default Main;