import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const Edit = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [form,setForm] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fed-medical-clinic-api.vercel.app/prescriptions/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setForm(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])


    const handleSubmit = () =>{
        axios.patch(`https://fed-medical-clinic-api.vercel.app/prescriptions/${id}`,form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        .then((res) => {
            console.log(res.data)
            navigate(`/prescriptions/${id}`,{relative: 'path', replace: true})
        })

        .catch((err) =>{
            console.error(err);
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
            <h1> Edit a Diagnosis</h1>
            <div>
            <input type='number' placeholder='Patient ID' name='patient_id' value={form.patient_id} onChange={handleChange} />
                <input type='number' placeholder='Doctor ID' name='doctor_id' value={form.doctor_id} onChange={handleChange} />
                <input type='number' placeholder='Diagnosis ID' name='diagnosis_id' value={form.diagnosis_id} onChange={handleChange}/>
                <input type='text' placeholder='Medication' name='medication' value={form.medication} onChange={handleChange} />
                <input type='text' placeholder='Dosage' name='dosage' value={form.dosage} onChange={handleChange} />
                <input type='date' placeholder='Start Date' name='start_date' value={form.start_date} onChange={handleChange} />
                <input type='date' placeholder='End Date' name='end_date' value={form.end_date} onChange={handleChange} />



                <button onClick={handleSubmit}>Submit</button>
                
x

            </div>
        </div>
    )
}

export default Edit;