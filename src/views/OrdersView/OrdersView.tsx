import { getOrders } from '@/helpers/orders.helper'
import { IOrder } from '@/interfaces/iOrder'
import { IUserSession } from '@/interfaces/IUserSession'
import { cookies } from 'next/headers'
import React from 'react'

const OrdersView = async () => {
    const cookieStore = cookies()
    const userData: IUserSession = JSON.parse(cookieStore.get('userData')?.value ?? "{}")
    const orders: IOrder[] = await getOrders(userData.token);
  return (
    <div>{
        orders && orders.map((order) => {
            return (
                <div key={order.id}>
                    <p>{order.status}</p>
                    <p>{new Date(order.date)?.toLocaleString()}</p>
                </div>
            )
        })
    }</div>
  )
}

export default OrdersView