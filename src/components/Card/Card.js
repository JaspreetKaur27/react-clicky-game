import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card mx-auto" value={props.id} onClick={() => props.clickedCard(props.id)}>
        <div className="img-fluid">
            <img alt={props.name} src={props.image}/>
        </div>
    </div>
);

export default Card;