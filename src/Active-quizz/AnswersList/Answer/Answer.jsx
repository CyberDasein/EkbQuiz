import React from "react";
import classes from "./Answer.module.css"

const Answer = props => {
    const cls = [classes.AnswerItem, classes.Answer]

    if (props.state) {
        cls.push(classes[props.state])
    }
    
    return (
        <li className={cls.join(' ')} onClick={()=>props.onAnswerClick(props.answers.id)}>
            {props.answers.text}
        </li>
    )
}
  
export default Answer;