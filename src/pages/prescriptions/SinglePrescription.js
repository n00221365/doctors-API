import { useEffect, useState} from "react";
import axios from 'axios'
import {Link, useParams } from "react-router-dom";

const SinglePrescription = (props) => {
    const token = localStorage.getItem('token')

    const [prescription, setPrescription] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fed-medical-clinic-api.vercel.app/prescriptions/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setPrescription(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return prescription && (
        <div>
            
            <Link to ={`edit`}>Edit prescription</Link>
            <h1> prescription for Patient: {prescription.patient_id} </h1>
            <h2> Prescribed by Doctor:{prescription.doctor_id} </h2>

            <br />
            <p>Diagnoses:{prescription.diagnosis_id}</p>
            <p>Medication:{prescription.medication}</p>
            <p>Dosage:{prescription.dosage}</p>
            <br />
            <p>Start Date:{prescription.start_date}</p>
            <p>End Date:{prescription.end_date}</p>


  
        </div>
    )
}

export default SinglePrescription;