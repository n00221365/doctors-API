import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import DiagnosisCard from '../../components/DiagnosisCard';
import { Row } from 'react-bootstrap';
import { useAuth } from "../../utils/useAuth";




const DiagnosisContainer = ({ children }) => {
    return (
        <div style={{ margin: 'auto', width: '1200px' }}>
            {children}
        </div>
    );
};

const Index = () => {
    const [diagnosis, setDiagnosis] = useState(null);
    const [diagnosisList, setDiagnosisList] = useState(null);
    const token = localStorage.getItem('token')



    useEffect(() => {
        axios
            .get('https://fed-medical-clinic-api.vercel.app/diagnoses', {
                headers: {
                Authorization: `Bearer ${token}`
                }
            })

            
            .then(response => {
                console.log(response.data);
                setDiagnosis(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    let diagnosisCards = diagnosis?.map((diagnosis, index) => (
        <DiagnosisCard
            key={index} // Always add a key when mapping
            id={diagnosis.id}

            patient_id={diagnosis.patient_id}
            condition={diagnosis.condition}
            diagnosis_date={diagnosis.diagnosis_date}
        />
    ));

    return (
        <>
            <h1>Welcome to the Diagnoses Index!</h1>
                <Link to='/diagnosis/create'>Create</Link>
                {diagnosis ? (
                            <div style={{backgroundColor: "#F5F5DD"}}>
                            <Row md={3} xs={1}>
                                {diagnosisCards}
                            </Row>
                        </div>
                ) : (
                    <p>Loading diagnosis...</p>
                )}
        </>
    );
};

export default Index;