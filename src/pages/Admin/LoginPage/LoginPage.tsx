import React, { useState } from 'react';
import { useMutation } from 'react-query';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const loginMutation = useMutation(async (data: { email: string, password: string }) => {
        const response = await fetch('http://localhost:3055/v1/api/shop/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const responseData = await response.json();
        return responseData;
    });

    const handleLogin = () => {
        loginMutation.mutate({ email, password }, {
            onSuccess: (data) => {
                const accessToken = data.message.metadata.tokens.accessToken;
                localStorage.setItem('accessToken', accessToken);
                console.log('Login Success');
                
            },
            onError: () => {
                setErrorMessage('Login failed. Please check your email and password.');
            }
        });
    };

    return (
        <div>
            <h1>Login</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" disabled={loginMutation.isLoading}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
