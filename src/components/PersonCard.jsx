import React, {useState} from "react";

const PersonCard = (props) => {
    const [age,setPersonPokes] = useState(props.age);
    const {firstName,lastName,hairColor} = props;
    return (
        <div className="Card">
            <h1>{firstName},{lastName}</h1>
            <p>Age: {age}</p>
            <p>hair Color: {hairColor}</p>
            <button onClick={ (event) => setPersonPokes(age +1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard