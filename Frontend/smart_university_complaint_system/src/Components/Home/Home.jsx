// Home.jsx
import LoginForm from './LoginForm'
import SidePanel from './SidePanel'
import UniversityImage from '../../assets/Home/University.jpg'
import { useState } from 'react'
import { login } from '../../services/authApi'

const styles = {
  page: {
    display: 'flex',
    minHeight: '100vh',
    backgroundImage:`url(${UniversityImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  },
  side: {
    flex: 2,
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
}

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


   async function handleLogin(credentials) {
    setLoading(true)
    setError('')
    try {
      const data = await login(credentials)
      console.log('Logged in:', data)
      // save the token and navigate to the dashboard here
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.side}>
        <SidePanel>
          <h1>Smart University Complaint System</h1>
          <p>Submit and track your complaints in one place.</p>
        </SidePanel>
      </div>
      <div style={styles.main}>
        <LoginForm onSubmit={handleLogin} loading={loading} error={error}  />
      </div>
    </div>
  )
}

export default Home