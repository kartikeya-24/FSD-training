
import "./Card.css"
import pic from "../images/my photo.jpg";
const Card = (props) => {
  return (
    <div className="card">
        <h2>{props.name} </h2>
        <img src={props.pic} alt="mypic" height="300px" />
        <h2> {props.roll}</h2>
        
        

    </div>
  );
};

export default Card