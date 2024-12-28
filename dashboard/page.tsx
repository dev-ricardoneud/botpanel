'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [hoursLeft, setHoursLeft] = useState<number>(0);
  const [minutesLeft, setMinutesLeft] = useState<number>(0);
  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  const router = useRouter();

  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 3); 

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = targetDate.getTime() - currentTime;

      if (distance <= 0) {
        clearInterval(interval);
        setDaysLeft(0);
        setHoursLeft(0);
        setMinutesLeft(0);
        setSecondsLeft(0);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDaysLeft(days);
        setHoursLeft(hours);
        setMinutesLeft(minutes);
        setSecondsLeft(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/logout');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.header}>Coming Soon!</h1>
        <p style={styles.text}>We are working hard to bring this page live. Stay tuned!</p>
        <div style={styles.countdown}>
          <h2 style={styles.timerText}>
            {daysLeft}d {hoursLeft}h {minutesLeft}m {secondsLeft}s
          </h2>
        </div>
        <div style={styles.logoutContainer}>
          <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
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
    textAlign: 'center',
  },
  content: {
    backgroundColor: '#242424',
    padding: '3rem 4rem',
    borderRadius: '12px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '480px',
  },
  header: {
    color: '#4CAF50',
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '1.5rem',
    animation: 'fadeIn 2s ease-out',
  },
  text: {
    color: '#ddd',
    fontSize: '18px',
    marginBottom: '2rem',
    animation: 'fadeIn 2s ease-out',
  },
  countdown: {
    marginBottom: '2rem',
    animation: 'fadeIn 2s ease-out',
  },
  timerText: {
    fontSize: '24px',
    color: '#FF5722',
    fontWeight: '600',
  },
  logoutContainer: {
    marginTop: '2rem',
  },
  logoutButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
};

export default Dashboard;