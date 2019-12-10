import React from "react";
import classes from "./AnswersList.module.css"
import Answer from "./Answer/Answer";

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answers, index)=> {
            return (
                <Answer key={index} answers={answers} 
                state={props.state ? props.state[answers.id]: null}
                onAnswerClick={props.onAnswerClick}/>
            )
        })}
        <li></li>
    </ul>
)
export default AnswersList;