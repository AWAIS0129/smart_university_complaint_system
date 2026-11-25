import React from 'react'

const RegisterButton = ({loading, success}) => {
  return (
    <>
    <button
            className="cursor-pointer rounded-md bg-rose-800 p-3 text-base font-semibold text-white hover:bg-rose-900 disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={loading || !!success}
          >
            {loading ? 'Creating account...' : 'Register'}
          </button>
    </>
  )
}

export default RegisterButton