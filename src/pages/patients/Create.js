import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../utils/useAuth";

const PatientsCreate = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        date_of_birth: '0000-00-00',
        address: ''

    })

    const handleSubmit = () => {
        axios.post(`https://fed-medical-clinic-api.vercel.app/patients`, form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                // We treat navigating routes like navigating a file system
                // We've got to go up one level using '../' to get back to /festivals/{id} from here
                // (we're currently at /festivals/create)                
                navigate(`../${res.data._id}`, {relative: 'path'})
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
        <div>
            <h1>Add a Patient</h1>
            <div>
                <input type='text' placeholder='First Name' name='first_name' value={form.first_name} onChange={handleChange} />
                <input type='text' placeholder='Last Name' name='last_name' value={form.last_name} onChange={handleChange} />
                <input type='text' placeholder='Email' name='email' value={form.email} onChange={handleChange}/>
                <input type='text' placeholder='Phone' name='phone' value={form.phone} onChange={handleChange} />
                <input type='date' placeholder='Date of Birth' name='date_of_birth' value={form.date_of_birth} onChange={handleChange} />
                <input type='text' placeholder='Address' name='address' value={form.address} onChange={handleChange} />


                <button onClick={handleSubmit}>Submit</button>

            </div>
        </div>
    )
}

export default PatientsCreate;