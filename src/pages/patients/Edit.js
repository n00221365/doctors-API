import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const Edit = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [form,setForm] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fed-medical-clinic-api.vercel.app/patients/${id}`, {
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
        axios.patch(`https://fed-medical-clinic-api.vercel.app/patients/${id}`,form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        .then((res) => {
            console.log(res.data)
            navigate(`/patients/${id}`,{relative: 'path', replace: true})
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
            <h1> Edit a Doctor</h1>
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

export default Edit;