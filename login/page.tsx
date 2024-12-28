'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      const isAuthenticated = localStorage.getItem('authToken');
      if (isAuthenticated) {
        router.push('/dashboard');
      } else {
        setIsLoading(false);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('authToken', data.token);
        router.push('/dashboard');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Er is een fout opgetreden.');
    }
  };

  if (isLoading) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181818',
        color: '#f5f5f5',
        fontFamily: 'Roboto, sans-serif',
        flexDirection: 'column'
      }}>
        <div className="dot-spinner" style={{
          '--uib-size': '2.8rem',
          '--uib-speed': '.9s',
          '--uib-color': '#183153',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: 'var(--uib-size)',
          width: 'var(--uib-size)',
        }}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="dot-spinner__dot"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '100%',
                width: '100%',
                transform: `rotate(${45 * index}deg)`
              }}>
              <div style={{
                content: '',
                height: '20%',
                width: '20%',
                borderRadius: '50%',
                backgroundColor: 'var(--uib-color)',
                transform: 'scale(0)',
                opacity: 0.5,
                animation: 'pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite',
                boxShadow: '0 0 20px rgba(18, 31, 53, 0.3)',
                animationDelay: `calc(var(--uib-speed) * ${-0.875 * (index + 1)})`
              }} />
            </div>
          ))}
        </div>
        <p style={{
          marginTop: '20px',
          fontSize: '18px',
          color: '#fff'
        }}>Bezig met laden...</p>
        <style jsx>{`
          @keyframes pulse0112 {
            0%, 100% {
              transform: scale(0);
              opacity: 0.5;
            }

            50% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.header}>Inloggen</h2>
        {errorMessage && <p style={styles.error}>{errorMessage}</p>}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Gebruikersnaam</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Voer je gebruikersnaam in"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Wachtwoord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Voer je wachtwoord in"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Inloggen</button>
        </form>
        <div style={styles.registerLink}>
          <p>Heb je nog geen account? <a href="/register" style={styles.link}>Registreer hier</a></p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
    color: '#f5f5f5',
    fontFamily: 'Roboto, sans-serif',
  },
  loginBox: {
    backgroundColor: '#242424',
    padding: '2rem 3rem',
    borderRadius: '12px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '380px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#4CAF50',
    fontWeight: '600',
    fontSize: '24px',
  },
  error: {
    color: '#e74c3c',
    fontSize: '14px',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#ddd',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #555',
    backgroundColor: '#333',
    color: '#f5f5f5',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  button: {
    width: '100%',
    padding: '14px 20px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  registerLink: {
    textAlign: 'center',
    marginTop: '1rem',
    fontSize: '14px',
    color: '#ddd',
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
  },
};

export default Login;