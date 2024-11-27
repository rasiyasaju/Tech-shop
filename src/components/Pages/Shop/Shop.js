import React from 'react';
import Home from '../../../components/Home/Home.js';
import FeaturedProducts from '../../../components/FeaturedProducts/FeaturedProducts.js'
import TopProducts from '../../../components/TopProducts/TopProducts.js';
import OurAdvantages from '../../../components/Footer/OurAdvantages/OurAdvantages.js';


const Shop = () => {
  return (
    <div>
      <Home/>
      <FeaturedProducts/>
      <TopProducts/>
      <OurAdvantages/>
      
    </div>
  )
}

export default Shop;
