import { useEffect, useState} from "react";
import axios from 'axios'
import {Link, useParams } from "react-router-dom";

const SingleDiagnosis = (props) => {
    const token = localStorage.getItem('token')

    const [diagnosis, setDiagnosis] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fed-medical-clinic-api.vercel.app/diagnoses/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setDiagnosis(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return diagnosis && (
        <div>
            
            <Link to ={`edit`}>Edit diagnosis</Link>
            <h1> diagnosis for Patient: {diagnosis.patient_id} </h1>
            <h2> Condition:{diagnosis.condition} </h2>

            <br />
            <p>Diagnoses Date:{diagnosis.diagnosis_date}</p>
           


  
        </div>
    )
}

export default SingleDiagnosis;