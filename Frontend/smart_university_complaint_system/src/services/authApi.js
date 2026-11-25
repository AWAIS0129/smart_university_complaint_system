// src/services/authApi.js
import { API_URL } from "./API_URL"

export async function login({ email, password }) {
  const response = await fetch(`${API_URL}/accounts/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    // fetch does NOT throw on 400/401/500, so we throw ourselves
    throw new Error(data.message || 'Login failed')
  }

  return data // e.g. { token, user }
}