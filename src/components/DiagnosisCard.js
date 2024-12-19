import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


//props are the elements within the country object
const DiagnosisCard = (props) => {
    const { id, patient_id,diagnosis_date} = props;

    return (
        <Card className="my-4  padding-10px mx-4" border="dark" style={{width:'13.5rem',height:'13.5rem',paddingLeft:20,backgroundColor:'#ECE7CA',borderWidth: 2,}}>
            
            {/* pulls the flag from the API and displays it */}

            {/* <Card.Img className='h-50 w-100'style={{paddingTop:13}} src={flag} variant='top' /> */}
            <Card.Body>
                <Card.Title>
                    
                {/* brings the user from the current page to the SingleCountry page */}

                    <Link to={`/diagnosis/${id}`}>{props.condition}</Link>
                    <h4>{props.patient_id}</h4>
                    <h4>{props.diagnosis_date}</h4>

                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default DiagnosisCard;
