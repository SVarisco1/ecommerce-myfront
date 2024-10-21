import { ILogin } from "@/interfaces/LoginInterfaces";
import { IRegister } from "@/interfaces/RegisterInterfaces";
import { Toast } from "./alert";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function register(userData: IRegister) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok) {
            return res.json();
        } else {
            Toast.fire({
                icon: "error",
                title: "Failed to register"
              });
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        Toast.fire({
            icon: "error",
            title: "Failed to register"
          });
        throw new Error(error)
    }
};

export async function login(userData: ILogin) {
    try {
        const res = await fetch(`${APIURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        if(res.ok) {
            return res.json();
        } else {
            Toast.fire({   
                icon: "error",
                title: "Failed to login",
            });
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        Toast.fire({   
            icon: "error",
            title: "Failed to login",
        });
        throw new Error(error)
    }
};