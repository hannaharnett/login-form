import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { setUserSession } from './utils';
import './styles.css';

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    const handleLogin = () => {
        setError(null);
        setLoading(true);

        axios
            .post("http://localhost:4000/users/signin", { username: username.value, password: password.value })
            .then(response => {
                setLoading(false);
                setUserSession(response.data.token, response.data.user);
                props.history.push('/dashboard');
            }).catch(error => {
                console.log(error)
                setLoading(false);
                if (error.response.status === 401) {
                    setError(error.response.data.message);
                } else {
                    setError("Something went wrong. Please try again later.");
                }
              });
    }

    return (
        <div className="login-form">
            <h3>Login</h3>
            <div className="login-content">
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" {...username} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...password} />
                </Form.Group>
                <Button 
                    variant="primary" 
                    type="submit" 
                    size="lg"
                    block
                    onClick={handleLogin} 
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Login'} 
                </Button>
                {error && (
                    <Alert variant="warning">
                        {error}
                    </Alert>
                )}
                </Form>
            </div>
        </div>

        
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
}

export default Login;