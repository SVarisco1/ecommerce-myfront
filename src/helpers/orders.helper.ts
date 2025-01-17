import { Toast } from "./alert";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
    try {
        const res = await fetch(`${APIURL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            },
            body: JSON.stringify({products})
        })
            return res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        Toast.fire({
            icon: "error",
            title: "Failed to create a order"
          });
        throw new Error(error)
    }
};

export async function getOrders(token: string) {
    try {
        const res = await fetch(`${APIURL}/users/orders`, {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            }
        })
            return res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        Toast.fire({
            icon: "error",
            title: "Failed to get orders"
          });
        throw new Error(error)
    }
};
