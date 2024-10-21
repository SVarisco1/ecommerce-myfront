'use client'
import CartProduct from '@/components/CartProduct/CartProduct';
import { Toast } from '@/helpers/alert';
import { createOrder } from '@/helpers/orders.helper';
import { IProduct } from '@/interfaces/IProduct';
import { IUserSession } from '@/interfaces/IUserSession';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CartView:React.FC<{userData: IUserSession}> = ({userData}) => {
  const router = useRouter();
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    if(storedCart) {
      let totalCart = 0; 
      storedCart?.map((item: IProduct) =>{
        totalCart = totalCart + item.price
      })
      setTotal(totalCart)
      setCart(storedCart)
    }
  }, [])

  const handleCheckout = async () => {
    const idProducts = cart?.map((product) => product.id)
    await createOrder(idProducts, userData.token)
    Toast.fire({
      icon: "success",
      title: "Your order is on the way"
    });
    setCart([])
    setTotal(0)
    localStorage.setItem("cart", "[]")
    router.push("/dashboard/orders")
  }

  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
    <h1 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h1>
    <div className="mt-16 flex flex-col md:flex-row gap-8">
      <div className="md:w-2/3">
        <div className="grid md:grid-cols-2 gap-8">
          {cart.length ? cart?.map((product: IProduct) =>
            <CartProduct key={product.id} {...product} /> ) : <p>Your cart is empty</p>
          }
        </div>
      </div>
      
      <div className="md:w-1/3">
        <div className="bg-gray-100 rounded-md p-4">
          <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">Order Summary</h3>

          <form className="mt-6">
            <div>
              <h3 className="text-base text-gray-800 font-semibold mb-4">User Details</h3>
              <div className="space-y-3">
                <div className="relative flex items-center">
                  <h4>Hola</h4>
                </div>
                <div className="relative flex items-center">
                  <h4>Hola</h4>
                </div>
                <div className="relative flex items-center">
                  <h4>Hola</h4>
                </div>
              </div>
            </div>
          </form>

          <ul className="text-gray-800 mt-6 space-y-3">
            <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">${total}</span></li>
            <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">$2.00</span></li>
            <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">$4.00</span></li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${total}</span></li>
          </ul>

          <div className="mt-6 space-y-3">
            <button onClick={handleCheckout} className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Checkout</button>
            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartView