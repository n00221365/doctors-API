import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../utils/useAuth";

const DiagnosisCreate = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const [form, setForm] = useState({
        patient_id: 0,
        condition: '',
        diagnosis_date: '',
  
    })

    const handleSubmit = () => {
        axios.post(`https://fed-medical-clinic-api.vercel.app/diagnoses`, form, {
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
            <h1>Add a Diagnosis</h1>
            <div>
                <input type='number' placeholder='Patient ID' name='patient_id' value={form.patient_id} onChange={handleChange} />
                <input type='text' placeholder='Condition' name='condition' value={form.condition} onChange={handleChange} />

                <input type='date' placeholder='Diagnosis Date' name='diagnosis_date' value={form.diagnosis_date} onChange={handleChange} />

                <button onClick={handleSubmit}>Submit</button>

            </div>

            patient_id: 0,
        condition: '',
        diagnosis_date: '',
        </div>
    )
}

export default DiagnosisCreate;