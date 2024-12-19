import {Link} from 'react-router';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar as BootstrapNavbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




const Navbar = (props) => {

    const { setAuthenticated } = props;

const navigate = useNavigate();

    return(
        <> 
        <div style={{backgroundColor: "#F5F5DD"}}>



        <BootstrapNavbar variant="dark" expand="lg" style={{backgroundColor: '#d1ecf1' }}>
        
       <h1><Link to='/'>&#127973;</Link></h1> 

      <Container fluid>
        <BootstrapNavbar.Collapse id="navbar-dark-example">
            
          <Nav style={{display: 'flex',  justifyContent: 'space-evenly',backgroundColor: '#d1ecf1' }}>

    

            {/* DOCTORS DROPDOWN */}

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Doctors    &#129404; "
              menuVariant="info"
              data-bs-toggle="collapse"
            >

              <NavDropdown.Item href="doctors">
                
              <Link to='/doctors'>Doctors Index</Link>
               
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="createDoctor"><Link to='/doctors/create'>New Doctor</Link></NavDropdown.Item>


            </NavDropdown>

            {/* PATIENTS DROPDOWN */}


            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Patients&#129314; "
              menuVariant="info"
            >


              <NavDropdown.Item href="patientsView">
              <Link to='/patients'>Patients Index</Link> 
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="createDoctor"><Link to='/patients/create'>New Patient</Link></NavDropdown.Item>


            </NavDropdown>


               {/* APPOINTMENTS DROPDOWN */}


               <NavDropdown
              id="nav-dropdown-dark-example"
              title="Appointments&#128198;"
              menuVariant="info"
            >


              <NavDropdown.Item href="appointmentsView">
              <Link to='/appointments'>Appointments Index</Link> 
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="createAppointment"><Link to='/appointments/create'>New Appointment</Link></NavDropdown.Item>


            </NavDropdown>


            
               {/* Diagnosis DROPDOWN */}


               <NavDropdown
              id="nav-dropdown-dark-example"
              title="Diagnosis "
              menuVariant="info"

            >


              <NavDropdown.Item href="diagnosisView">
              <Link to='/diagnosis'>Diagnosis Index</Link> 
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="createDiagnosis"><Link to='/diagnosis/create'>New Diagnosis</Link></NavDropdown.Item>


            </NavDropdown>




              {/* PRESCRIPTION DROPDOWN */}


              <NavDropdown
              id="nav-dropdown-dark-example"
              title="Prescriptions&#x1F48A;"
              menuVariant="info"
            >


              <NavDropdown.Item href="prescriptionView">
              <Link to='/prescriptions'>Prescription Index</Link> 
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="createPresctiption"><Link to='/presctiptions/create'>New Presctiption</Link></NavDropdown.Item>


            </NavDropdown>

            <Link to='/login'>__Login__</Link> |
            <Link to='/register'>__Register__</Link> |


            <button onClick={() => {
                setAuthenticated(false)
                localStorage.removeItem('token')
                navigate('/login', { replace: true })
            }}>Logout</button>

          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
    </div>
        </>
    )
}

export default Navbar;