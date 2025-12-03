import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { colors, typography } from '../styles/design-tokens';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username, firstName, lastName }),
      });
      const data = await response.json();
      if (data.token) {
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ color: colors.primary,...typography.heading1 }}>Create Account</h1>
      <label>
        Email
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <label>
        Username
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label>
        First Name
        <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <label>
        Last Name
        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;