import React from "react";
import classes from "./activeQuiz.module.css"
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <div>
                <small>{props.answerNumber} из {props.quizLength}</small> <br/>
                <img className={classes.img} src={props.questionPickture}></img>

                <div> 
                    <strong>{props.answerNumber}</strong>&nbsp; 
                    {props.question}
               </div>
            </div>

        </p>
        <AnswersList answers={props.answers}
            state={props.state}
            onAnswerClick={props.onAnswerClick} />

    </div>
)
export default ActiveQuiz