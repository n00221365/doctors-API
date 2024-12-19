import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import PrescriptionCard from '../../components/PrescriptionCard';
import { Row } from 'react-bootstrap';
import { useAuth } from "../../utils/useAuth";



const PrescriptionsContainer = ({ children }) => {
    return (
        <div style={{ margin: 'auto', width: '1200px' }}>
            {children}
        </div>
    );
};

const Index = () => {
    const [prescriptions, setPrescriptions] = useState(null);
    const [prescriptionsList, setPrescriptionsList] = useState(null);
    const token = localStorage.getItem('token')


    useEffect(() => {
        axios
            .get('https://fed-medical-clinic-api.vercel.app/prescriptions', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                    })
            .then(response => {
                console.log(response.data);
                setPrescriptions(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    let prescriptionCards = prescriptions?.map((prescription, index) => (
        <PrescriptionCard
            key={index} // Always add a key when mapping
            id={prescription.id}

            diagnosis_id={prescription.diagnosis_id}
            medication={prescription.medication}
            dosage={prescription.dosage}

        />
    ));

    return (
        <>
            <h1>Welcome to the Prescriptions Index!</h1>
                <Link to='/prescriptions/create'>Create</Link>
                {prescriptions ? (
                            <div style={{backgroundColor: "#F5F5DD"}}>
                            <Row md={3} xs={1}>
                                {prescriptionCards}
                            </Row>
                        </div>
                ) : (
                    <p>Loading prescriptions...</p>
                )}
        </>
    );
};

export default Index;