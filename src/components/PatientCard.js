import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


//props are the elements within the country object
const PatientCard = (props) => {
    const { id, first_name, last_name, email, phone} = props;

    return (
        <Card className="my-4  padding-10px mx-4" border="dark" style={{width:'13.5rem',height:'13.5rem',paddingLeft:20,backgroundColor:'#ECE7CA',borderWidth: 2,}}>
            
            {/* pulls the flag from the API and displays it */}

            {/* <Card.Img className='h-50 w-100'style={{paddingTop:13}} src={flag} variant='top' /> */}
            <Card.Body>
                <Card.Title>
                    
                {/* brings the user from the current page to the SingleCountry page */}

                    <Link to={`/patients/${id}`}>{props.first_name}{" "}{props.last_name}</Link>
                </Card.Title>
                <p>{email}</p>
                <p>{phone}</p>

            </Card.Body>
        </Card>
    )
}

export default PatientCard;