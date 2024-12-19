import {BrowserRouter as Router, Routes, Route} from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';

 import DoctorsIndex from './pages/doctors/Index';
 import PatientsIndex from './pages/patients/Index';
 import AppointmentsIndex from './pages/appointments/Index';
 import DiagnosisIndex from './pages/diagnosis/Index';
 import PrescriptionsIndex from './pages/prescriptions/Index';

 import DoctorsCreate from './pages/doctors/Create';
 import PatientsCreate from './pages/patients/Create';
 import AppointmentsCreate from './pages/appointments/Create';
 import DiagnosisCreate from './pages/diagnosis/Create';
 import PrescriptionsCreate from './pages/prescriptions/Create';

 import SingleDoctor from "./pages/doctors/SingleDoctor";
 import SinglePatient from "./pages/patients/SinglePatient";
 import SingleAppointment from "./pages/appointments/SingleAppointment";
 import SinglePrescription from "./pages/prescriptions/SinglePrescription";
 import SingleDiagnosis from "./pages/diagnosis/SingleDiagnosis";

 import DoctorsEdit from "./pages/doctors/Edit";
 import PatientsEdit from "./pages/patients/Edit";
 import AppointmentsEdit from "./pages/appointments/Edit";
 import DiagnosisEdit from "./pages/diagnosis/Edit";
 import PrescriptionsEdit from "./pages/prescriptions/Edit";





 import { useEffect, useState } from "react";
 import LoginForm from "./components/LoginForm";
 import RegisterForm from "./components/RegisterForm";
 import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  const [authenticated, setAuthenticated] = useState(false)

  const [name, setName] = useState('Ben')


  useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
          setAuthenticated(true)
      }
  }, [])

  return (
    <div style={{backgroundColor: "#F5F5DD"}}>
    <Router>
      <Navbar setAuthenticated={setAuthenticated}/>
      <Routes>
        {/* HomePage */}
        <Route path="/" element={<Home />}/>

        {/* Doctors Routes */}
        <Route path="/doctors" element={<DoctorsIndex />}/>
        <Route path='/doctors/:id' element={<SingleDoctor />} />
        <Route path="/doctors/create" element={<DoctorsCreate />}/>
        <Route path="/doctors/:id/edit" element={<DoctorsEdit />}/>



        <Route path="/patients" element={<PatientsIndex />}/>
        <Route path='/patients/:id' element={<SinglePatient />} />
        <Route path="/patients/create" element={<PatientsCreate />}/>
        <Route path="/patients/:id/edit" element={<PatientsEdit />}/>



        <Route path="/appointments" element={<AppointmentsIndex />}/>
        <Route path='/appointments/:id' element={<SingleAppointment />} />
        <Route path="/appointments/create" element={<AppointmentsCreate />}/>
        <Route path="/appointments/:id/edit" element={<AppointmentsEdit />}/>


        <Route path="/diagnosis" element={<DiagnosisIndex />}/>
        <Route path='/diagnosis/:id' element={<SingleDiagnosis />} />
        <Route path="/diagnosis/create" element={<DiagnosisCreate />}/>
        <Route path="/diagnosis/:id/edit" element={<DiagnosisEdit />}/>


        <Route path="/prescriptions" element={<PrescriptionsIndex />}/>
        <Route path='/prescriptions/:id' element={<SinglePrescription />} />
        <Route path="/prescriptions/create" element={<PrescriptionsCreate />}/>
        <Route path="/prescriptions/:id/edit" element={<PrescriptionsEdit />}/>





        <Route path='/login' element={<LoginForm setAuthenticated={setAuthenticated} />} />
        <Route path='/register' element={<RegisterForm setAuthenticated={setAuthenticated} />} />

        {/* <Route path="/doctors" element={<DoctorsIndex />}/> */}

      </Routes>
    </Router>
    </div>
  );
}

export default App;


