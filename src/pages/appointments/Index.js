import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import AppointmentCard from '../../components/AppointmentCard';
import { Row } from 'react-bootstrap';
import { useAuth } from "../../utils/useAuth";




const AppointmentsContainer = ({ children }) => {


    return (
        <div style={{ margin: 'auto', width: '1200px' }}>
            {children}
        </div>
    );
};

const Index = () => {
    const [appointments, setAppointments] = useState(null);
    const [appointmentsList, setPAppointmentsList] = useState(null);
    const token = localStorage.getItem('token')



    useEffect(() => {
        axios.get('https://fed-medical-clinic-api.vercel.app/appointments', {
            headers: {
                Authorization: `Bearer ${token}`
                }
        })
            
            .then(response => {
                console.log(response.data);
                setAppointments(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);



    let appointmentCards = appointments?.map((appointment, index) => (
        <AppointmentCard
            key={index} // Always add a key when mapping
            id={appointment.id}

            appointment_date={appointment.appointment_date}
            doctor_id={appointment.doctor_id}
            patient_id={appointment.patient_id}

        />
    ));

    return (
        <>
            <h1>Welcome to the Appointments Index!</h1>
                <Link to='/appointments/create'>Create</Link>
                {appointments ? (
                            <div style={{backgroundColor: "#F5F5DD"}}>
                            <Row md={3} xs={1}>
                                {appointmentCards}
                            </Row>
                        </div>
                ) : (
                    <p>Loading appointments...</p>
                )}
        </>
    );
};

export default Index;