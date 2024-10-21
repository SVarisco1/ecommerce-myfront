import { getProductById } from '@/helpers/productsHelper';
import ProductDetail from '@/views/ProductDetail/ProductDetail'
import React from 'react'

const detail:React.FC<{params: {productID: string}}> = async ({params}) => {
  const product = await getProductById(params.productID)
  console.log(product);
  
      
  return (
    <ProductDetail {...product}/>
  )
};

export default detail;