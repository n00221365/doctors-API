import { useEffect, useState} from "react";
import axios from 'axios'
import {Link, useParams } from "react-router-dom";

const SinglePatient = (props) => {
    const token = localStorage.getItem('token')

    const [patient, setPatient] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fed-medical-clinic-api.vercel.app/patients/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setPatient(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return patient && (
        <div>
            
            <Link to ={`/patients/${id}/edit`}>Edit Patient</Link>
            <h1> {patient.first_name} {patient.last_name}</h1>
            <br />
            <h3>{patient.date_of_birth}</h3>
            <h4>{patient.address}</h4>
            <br />

            <p>{patient.email}</p>
            <p>{patient.phone}</p>

  
        </div>
    )
}

export default SinglePatient;