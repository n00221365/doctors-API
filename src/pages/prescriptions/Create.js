import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../utils/useAuth";

const PrescriptionsCreate = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const [form, setForm] = useState({
        patient_id: 1,
        doctor_id: 1,
        diagnosis_id: 1,
        medication: '',
        dosage: '',
        start_date: '0000-00-00',
        end_date: '0000-00-00'


    })

    const handleSubmit = () => {
        axios.post(`https://fed-medical-clinic-api.vercel.app/prescriptions`, form, {
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
            <h1>Add a Prescription</h1>
            <div>
                <input type='number' placeholder='Patient ID' name='patient_id' value={form.patient_id} onChange={handleChange} />
                <input type='number' placeholder='Doctor ID' name='doctor_id' value={form.doctor_id} onChange={handleChange} />
                <input type='number' placeholder='Diagnosis ID' name='diagnosis_id' value={form.diagnosis_id} onChange={handleChange}/>
                <input type='text' placeholder='Medication' name='medication' value={form.medication} onChange={handleChange} />
                <input type='text' placeholder='Dosage' name='dosage' value={form.dosage} onChange={handleChange} />
                <input type='date' placeholder='Start Date' name='start_date' value={form.start_date} onChange={handleChange} />
                <input type='date' placeholder='End Date' name='end_date' value={form.end_date} onChange={handleChange} />



                <button onClick={handleSubmit}>Submit</button>

            </div>
        </div>
    )
}

export default PrescriptionsCreate;