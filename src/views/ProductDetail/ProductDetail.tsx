import Button from '@/components/Button/Button'
import { IProduct } from '@/interfaces/IProduct'
import { cookies } from 'next/headers'
import React from 'react'

const ProductDetail: React.FC<IProduct> = (props) => {
  const {name, image, description, stock, price} = props;
  const cookieStore = cookies()
  const userData = JSON.parse(cookieStore.get('userData')?.value ?? "{}")
  
  return (
    <>
    <div className="text-gray-700 body-font bg-white mb-10"> 
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={image}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">TECHNYX</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
            <div className="flex mb-4">
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3">{stock} left</span>
                
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">${price}</span>
              <Button userData={userData} product={props}>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default ProductDetail;
