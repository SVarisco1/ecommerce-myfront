'use client'

import { Toast } from "@/helpers/alert";
import { IProduct } from "@/interfaces/IProduct";
import { IUserSession } from "@/interfaces/IUserSession";
import React from "react";
import Swal from "sweetalert2";
interface ButtonProps {
    children: React.ReactNode
    userData: IUserSession
    product: IProduct
}

const Button: React.FC<ButtonProps> = ({children, userData, product}) => {
    const handleClick = () => {
        if(!userData.token) {
            Swal.fire({
                position: "center",
                icon: "info",
                title: "You must be logged to add products",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
            const productExist = cart?.some((item: IProduct) => {
                if(item.id === product.id) return true;
                return false;
            })
            if(productExist) {
                Toast.fire({
                    icon: "warning",
                    title: "This product is already in your cart"
                })
            } else {
                cart.push(product)
                localStorage.setItem("cart", JSON.stringify(cart))
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Added",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
    return (
        <button onClick={handleClick} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">{children}</button>
    )
}

export default Button;