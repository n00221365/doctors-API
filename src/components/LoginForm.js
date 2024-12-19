import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const handleLogin = (email, password) => {
    return axios.post(`https://fed-medical-clinic-api.vercel.app/login`, {
        email, password
    })
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
            console.error(err)
        })
}

const LoginForm = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        // The form will cause a refresh by default. We don't want that, because our state will disappear.
        e.preventDefault();

        handleLogin(form.email, form.password)
            .then(() => {
                navigate('/')
            })
    }

    const handleChange = (e) => {
        setForm(({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form>
            <input onChange={handleChange} value={form.email} type='email' name='email' placeholder='joe.bloggs@email.com'></input>
            <input onChange={handleChange} value={form.password} type='password' name='password'></input>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default LoginForm