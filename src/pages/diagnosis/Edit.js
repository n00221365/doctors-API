import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const Edit = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [form,setForm] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fed-medical-clinic-api.vercel.app/diagnoses/${id}`, {
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
        axios.patch(`https://fed-medical-clinic-api.vercel.app/diagnoses/${id}`,form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        .then((res) => {
            console.log(res.data)
            navigate(`/diagnosis/${id}`,{relative: 'path', replace: true})
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
                <input type='text' placeholder='Condition' name='condition' value={form.condition} onChange={handleChange} />

                <input type='date' placeholder='Diagnosis Date' name='diagnosis_date' value={form.diagnosis_date} onChange={handleChange} />


                <button onClick={handleSubmit}>Submit</button>
                
x

            </div>
        </div>
    )
}

export default Edit;