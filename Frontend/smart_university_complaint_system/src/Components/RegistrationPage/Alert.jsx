const styles = {
  error: 'bg-red-100 text-red-800',
  success: 'bg-green-100 text-green-800',
}

const Alert = ({ type = 'error', message }) => {
  if (!message) return null
  return (
    <p className={`m-0 whitespace-pre-line rounded-md px-3 py-2.5 text-sm ${styles[type]}`}>
      {message}
    </p>
  )
}

export default Alert