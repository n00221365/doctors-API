import { useEffect, useState} from "react";
import axios from 'axios'
import {Link, useParams } from "react-router-dom";

const SingleDoctor = (props) => {
    const token = localStorage.getItem('token')

    const [doctor, setDoctor] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fed-medical-clinic-api.vercel.app/doctors/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setDoctor(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return doctor && (
        <div style={{backgroundColor: "#F5F5DD"}}>
            
            <Link to={`/doctors/${id}/edit`}>Edit</Link>
            <h1>Dr. {doctor.first_name} {doctor.last_name}</h1>
            <h2>{doctor.specialisation}</h2>
            <br />
            <p>{doctor.email}</p>
            <p>{doctor.phone}</p>

  
        </div>
    )
}

export default SingleDoctor;