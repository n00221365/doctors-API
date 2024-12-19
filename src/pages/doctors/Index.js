import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import DoctorCard from '../../components/DoctorCard';
import { Row, Button } from 'react-bootstrap';



const DoctorsContainer = ({ children }) => {
    return (
        <div style={{ margin: 'auto', width: '1200px' }}>
            {children}
        </div>
    );
};

const Index = () => {
    const [doctors, setDoctors] = useState(null);
    const [doctorsList, setDoctorsList] = useState(null);


    useEffect(() => {
        axios
            .get('https://fed-medical-clinic-api.vercel.app/doctors')
            .then(response => {
                console.log(response.data);
                setDoctors(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    let doctorCards = doctors?.map((doctor, index) => (
        <DoctorCard
            key={index} // Always add a key when mapping
            id={doctor.id}
            first_name={doctor.first_name}
            last_name={doctor.last_name}
            specialisation={doctor.specialisation}
        />
    ));

    return (
        <>
        <diV style={{backgroundColor: "#F5F5DD"}}>
            <h1 style={{backgroundColor: "#F5F5DD"}}>Welcome to the Doctors Index!</h1>

            <button variant="btn outline-light"><Link to='/doctors/create'>Create</Link></button>

                
                {doctors ? (
                            <div style={{backgroundColor: "#F5F5DD"}}>
                            <Row md={5} xs={1}>
                                {doctorCards}
                            </Row>
                        </div>
                ) : (
                    <p>Loading doctors...</p>
                )}
                </diV>
        </>
    );
};

export default Index;