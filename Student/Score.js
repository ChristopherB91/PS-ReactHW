import React from "react";

function Score(props){
    return(
        <p>{props.scores.date} {props.scores.score}</p>
    )
}

export default Score