import { useEffect, useState} from "react";
import axios from 'axios'
import {Link, useParams } from "react-router-dom";

const SingleAppointment = (props) => {
    const token = localStorage.getItem('token')

    const [appointment, setAppointment] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fed-medical-clinic-api.vercel.app/appointments/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setAppointment(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return appointment && (
        <div>
            
            <Link to ={`edit`}>Edit appointment</Link>
            <h1> Appointment for Patient: {appointment.patient_id} </h1>
            <br />
            <p>Patient ID:{appointment.patient_id}</p>
            <p>Doctor ID:{appointment.doctor_id}</p>

  
        </div>
    )
}

export default SingleAppointment;