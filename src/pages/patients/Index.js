import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import PatientCard from '../../components/PatientCard';
import { Row } from 'react-bootstrap';



const PatientsContainer = ({ children }) => {
    return (
        <div style={{ margin: 'auto', width: '1200px' }}>
            {children}
        </div>
    );
};

const Index = () => {
    const [patients, setPatients] = useState(null);
    const [patientsList, setPatientsList] = useState(null);


    useEffect(() => {
        axios
            .get('https://fed-medical-clinic-api.vercel.app/patients')
            .then(response => {
                console.log(response.data);
                setPatients(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    let patientCards = patients?.map((patient, index) => (
        <PatientCard
            key={index} // Always add a key when mapping
            id={patient.id}

            first_name={patient.first_name}
            last_name={patient.last_name}
            email={patient.email}
            phone={patient.phone}

        />
    ));

    return (
        <>
            <h1>Welcome to the Patients Index!</h1>
                <Link to='/patients/create'>Create</Link>
                {patients ? (
                            <div style={{backgroundColor: "#F5F5DD"}}>
                            <Row md={3} xs={1}>
                                {patientCards}
                            </Row>
                        </div>
                ) : (
                    <p>Loading patients...</p>
                )}
        </>
    );
};

export default Index;