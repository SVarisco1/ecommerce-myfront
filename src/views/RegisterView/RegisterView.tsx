'use client'
import { Toast } from '@/helpers/alert'
import { register } from '@/helpers/authHelper.ts'
import { registerValidation } from '@/helpers/registerValidation'
import { IRegister, TRegisterErrors } from '@/interfaces/RegisterInterfaces'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const RegisterView = () => {
    const router = useRouter()
    const initialState = {
        email: "",
        password: "",
        name: "",
        address: "",
        phone: "",

    }

    const [dataUser, setDataUser] = useState<IRegister>(initialState)
    const [errors, setErrors] = useState<TRegisterErrors>(initialState)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await register(dataUser);
        Toast.fire({
          icon: "success",
          title: "Successfully registered"
        });
      router.push("/login")
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setDataUser({
          ...dataUser,
          [name]: value
        })
    };

    useEffect(() => {
      const errors = registerValidation(dataUser)
      setErrors(errors)
    }, [dataUser])

    return (
    <div>
      <h1>Register into TechNyx</h1>
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
        <div>
          <label htmlFor='name'>Name: </label>
          <input 
            id='name'
            type='text'
            name='name'
            value={dataUser.name}
            onChange={handleChange} />
            {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor='address'>Address: </label>
          <input 
            id='address'
            type='text'
            name='address'
            value={dataUser.address}
            onChange={handleChange} />
            {errors.address && <span>{errors.address}</span>}
        </div>
        <div>
          <label htmlFor='phone'>Phone: </label>
          <input 
            id='phone'
            type='text'
            name='phone'
            value={dataUser.phone}
            onChange={handleChange} />
            {errors.phone && <span>{errors.phone}</span>}
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterView