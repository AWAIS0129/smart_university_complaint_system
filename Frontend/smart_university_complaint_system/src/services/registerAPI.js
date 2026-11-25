import { API_URL } from "./API_URL"
export async function register(data) {
    const res = await fetch(`${API_URL}/accounts/register`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data ),
    })
    const result = await res.json().catch(() => ({}))

    if (!res.ok) {
        throw new Error(getErrorMessage(result, 'Registration failed'))
    }

    return result
}

function getErrorMessage(result, fallback) {
  if (result.message) return result.message
  if (result.detail) return result.detail

  const messages = Object.entries(result).map(([field, errors]) =>
    `${field}: ${Array.isArray(errors) ? errors.join(' ') : errors}`
  )
  return messages.length ? messages.join('\n') : fallback
}