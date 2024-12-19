import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../utils/useAuth";

const DoctorsCreate = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        specialisation: 'Podiatrist'
    })

    const handleSubmit = () => {
        axios.post(`https://fed-medical-clinic-api.vercel.app/doctors`, form, {
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


    const specialisations = ["Podiatrist", "Dermatologist", "Pediatrition", "Psychiatrist", "General Practitioner"]

    return (
        <div>
            <h1>Add a Doctor</h1>
            <div>
                <input type='text' placeholder='First Name' name='first_name' value={form.first_name} onChange={handleChange} />
                <input type='text' placeholder='Last Name' name='last_name' value={form.last_name} onChange={handleChange} />

                <select name='specialisation' onChange={handleChange}>
                  {
                    specialisations.map((specialisation) => <option value={specialisation}>{specialisation}</option>)
                  }
                </select>

                <input type='text' placeholder='Email' name='email' onChange={handleChange} />

                <input type='text' placeholder='Phone Number' name='phone' onChange={handleChange} />

                <button onClick={handleSubmit}>Submit</button>

            </div>
        </div>
    )
}

export default DoctorsCreate;