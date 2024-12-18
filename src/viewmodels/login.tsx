'use client'
import { fetchLogin } from '@/services/login'
import { useState } from 'react'

export function useLoginViewModel() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmailChange(e: {
    target: { value: React.SetStateAction<string> }
  }) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e: {
    target: { value: React.SetStateAction<string> }
  }) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault()
    console.log(`Email: ${email}, Senha: ${password}`)
    await fetchLogin(email, password)
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  }
}
