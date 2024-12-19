import axios from 'axios'
import { useState } from 'react'
import { handleLogin } from './LoginForm';
import { useNavigate } from 'react-router-dom';

const RegisterForm = (props) => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        // The form will cause a refresh by default. We don't want that, because our state will disappear.
        e.preventDefault();

        axios.post(`https://fed-medical-clinic-api.vercel.app/register`, form)
            .then((res) => {
                console.log(res)

                localStorage.setItem('user', JSON.stringify(res.data.user))

                handleLogin(form.email, form.password)

                navigate('/')

            })
            .catch((err) => {
                console.error(err)
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
            <input onChange={handleChange} value={form.first_name} type='text' name='first_name' placeholder='Enter First Name'></input>

            <br />
            <input onChange={handleChange} value={form.last_name} type='text' name='last_name' placeholder='Enter Last Name'></input>

            <br />
            <input onChange={handleChange} value={form.email} type='email' name='email' placeholder='Enter Email'></input>
            <br />
            <input onChange={handleChange} value={form.password} type='password' name='password' placeholder='Enter Password'></input>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default RegisterForm