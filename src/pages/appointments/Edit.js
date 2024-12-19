import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const Edit = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [form,setForm] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fed-medical-clinic-api.vercel.app/appointments/${id}`, {
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
        axios.patch(`https://fed-medical-clinic-api.vercel.app/appointment/${id}`,form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        .then((res) => {
            console.log(res.data)
            navigate(`/appointments/${id}`,{relative: 'path', replace: true})
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
            <h1> Edit a Appointment</h1>
            <div>
            <input type='date' placeholder='Appointment Date' name='appointment_date' value={form.appointment_date} onChange={handleChange} />
                <input type='number' placeholder='Doctor id' name='doctor_id' value={form.doctor_id} onChange={handleChange} />
                <input type='number' placeholder='Patient id' name='patient_id' value={form.patient_id} onChange={handleChange} />

                <button onClick={handleSubmit}>Submit</button>
                


            </div>
        </div>
    )
}

export default Edit;