
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/user/login`,
                { email, password }
            );

            localStorage.setItem('token', response.data.data.token);

            toast.success('Login successful ');

            navigate('/dashboard'); 

        } catch (err) {
            toast.error(
                err.response?.data?.message || 'Invalid email or password '
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="bg-white p-4 rounded shadow-sm" style={{ width: '450px' }}>
                <h2 className="text-center mb-4">CRM Admin</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        className="btn  w-100"
                        style={{background:"red",color:"white"}}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                 <div className="text-center mt-3">
                    <span className="text-muted">Don’t have an account? </span>
                    <Link to="/register" className="text-danger fw-semibold">
                        Register 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
