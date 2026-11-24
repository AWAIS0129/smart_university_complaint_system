// LoginForm.jsx
import { useState } from 'react'




const styles = {
    form: {
        width: '100%',
        maxWidth: '400px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        backgroundColor:'#f2f2f2cf',
        color: 'Black',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.9)',
    },
    title: {
        margin: 0,
        fontSize: '28px',
    },
    field: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        
    },
    label: {
        fontSize: '14px',
        fontWeight: 600,
    },
    input: {
        padding: '10px 12px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '6px',
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        fontWeight: 600,
        color: 'white',
        backgroundColor: '#1e40af',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    error: {
    margin: 0,
    padding: '10px 12px',
    borderRadius: '6px',
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    fontSize: '14px',
},
 
}

const LoginForm = ({ title = 'Log in', onSubmit, loading = false, error = ''  }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault() // stops the page from reloading
        onSubmit?.({ email, password })
    }

    return (
    
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.title}>{title}</h2>
                     {error && <p style={styles.error}>{error}</p>}
                <div style={styles.field}>
                    <label style={styles.label} htmlFor="email">Email</label>
                    <input
                        style={styles.input}
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@university.edu"
                        required
                    />
                </div>

                <div style={styles.field}>
                    <label style={styles.label} htmlFor="password">Password</label>
                    <input
                        style={styles.input}
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button style={styles.button} type="submit" disabled= {loading}> {loading ? 'Logging in...' : 'Log in'}</button>
            </form>
        
    )
}

export default LoginForm