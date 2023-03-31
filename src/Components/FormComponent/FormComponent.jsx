import React from 'react'
import { useState } from 'react'

const FormComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(email,password)
    }
  return (
    <form onSubmit={handleSubmit}>
        {email}{password}
      <div>
        <label htmlFor="email">email</label>
        <input type="email" id='email' value={email} onChange={e=>setEmail(e.target.value)} />
      </div>
      <div>
      <label htmlFor="password">password</label>
        <input type="password" id='password' value={password} onChange={e=>setPassword(e.target.value)} />
      </div>
      <button type='submit'>Отправить</button>
    </form>
  )
}

export default FormComponent
