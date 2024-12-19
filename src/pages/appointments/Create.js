import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../utils/useAuth";

const AppointmentsCreate = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const [form, setForm] = useState({
        appointment_date: '',
        doctor_id: 1,
        patient_id: 1,

    })

    const handleSubmit = () => {
        axios.post(`https://fed-medical-clinic-api.vercel.app/appointments`, form, {
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
            [e.target.name]: e.target.type == 'number' ? parseInt(e.target.value) : e.target.value
        }))
    }



    return (
        <div>
            <h1>Add an Appointment</h1>
            <div>
                <input type='date' placeholder='Appointment Date' name='appointment_date' value={form.appointment_date} onChange={handleChange} />
                <input type='number' placeholder='Doctor id' name='doctor_id' value={form.doctor_id} onChange={handleChange} />
                <input type='number' placeholder='Patient id' name='patient_id' value={form.patient_id} onChange={handleChange} />


                <button onClick={handleSubmit}>Submit</button>

            </div>
        </div>
    )
}

export default AppointmentsCreate;