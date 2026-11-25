import { useState } from 'react'
import { useNavigate } from 'react-router'
import { register } from '../services/registerAPI'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  city: '',
  country: '',
  contact: '',
}

export function useRegistration() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    try {
      await register({
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        password: form.password,
        country: form.country,
        city: form.city,
        contact: form.contact,
      })
      setSuccess('Registration successful! Redirecting to login...')
      setTimeout(() => navigate('/'), 2000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { form, handleChange, handleSubmit, loading, error, success }
}