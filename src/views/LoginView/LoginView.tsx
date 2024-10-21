'use client'
import { login } from '@/helpers/authHelper.ts'
import { loginValidation } from '@/helpers/loginValidation'
import { ILogin, ILoginErrors } from '@/interfaces/LoginInterfaces'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import { Toast } from '@/helpers/alert'

const LoginView = () => {
  const router = useRouter();
    const initialState = {
        email: "",
        password: ""
    }

    const [dataUser, setDataUser] = useState<ILogin>(initialState)
    const [errors, setErrors] = useState<ILoginErrors>(initialState)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const res = await login(dataUser);
      const {token, user} = res;
      Cookies.set('userData', JSON.stringify({token, user}), { expires: 1});
      Toast.fire({
        icon: "success",
        title: "Logged in",

    });
    router.push("/")
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setDataUser({
          ...dataUser,
          [name]: value
        })
    };

    useEffect(() => {
      const errors = loginValidation(dataUser)
      setErrors(errors)
    }, [dataUser])

    return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email_address'>Email: </label>
          <input 
            id='email_address'
            type='email'
            name='email'
            value={dataUser.email}
            placeholder='tumail@mail.com'
            onChange={handleChange} />
            {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor='password'>Password: </label>
          <input 
            id='password'
            type='password'
            name='password'
            value={dataUser.password}
            onChange={handleChange} />
            {errors.password && <span>{errors.password}</span>}
        </div>
        <button type='submit'>Sign in</button>
      </form>
    </div>
  )
}

export default LoginView