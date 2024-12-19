import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


//props are the elements within the country object
const DoctorCard = (props) => {
    const { id, first_name, last_name, email, phone, specialisation} = props;

    return (
        <Card className="my-4  padding-10px mx-4" border="dark" style={{width:'13.5rem',height:'13.5rem',paddingLeft:20,backgroundColor:'#ECE7CA',borderWidth: 2,}}>
        

            <Card.Body>
                <Card.Title>
                    

                    <Link to={`/doctors/${id}`}>Dr.{props.first_name}{" "}{props.last_name}</Link>
                </Card.Title>
                <p>{specialisation}</p>
            </Card.Body>

        </Card>
    )
}

export default DoctorCard;
