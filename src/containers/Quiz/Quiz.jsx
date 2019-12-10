import React from "react";
import classes from "./Quiz.module.css"
import ActiveQuiz from "../../Active-quizz/ActiveQuiz";
import FinishedQuiz from "../../FinishedQuiz/FinishedQuiz";
import City from "../../picktures/597711cba19eb_0d739cac3d42d04c2e69c4cddf62f354.jpg"

class Quiz extends React.Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                questionPickture: City,
                question: 'Сколько лет Екатеринбургу?',
                rightAnswerId: 4,
                id: 1,
                answers: [
                    { text: '150', id: 1 },
                    { text: '300', id: 2 },
                    { text: '100', id: 3 },
                    { text: '296', id: 4 }
                ]
            },
            {
                question: 'В честь какой императрицы назван город?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    { text: 'В честь Екатерины I', id: 1 },
                    { text: 'В честь Екатерины II', id: 2 },
                    { text: 'В честь Екатерины III', id: 3 },
                ]
            },
            {
                question: 'На какой реке стоит Екатеринбург?',
                rightAnswerId: 2,
                id: 3,
                answers: [
                    { text: 'Чусовая', id: 1 },
                    { text: 'Исеть', id: 2 },
                    { text: 'Волга', id: 3 },
                    { text: 'Иртыш', id: 4 }
                ]
            },
            {
                question: 'Какие животные держат щит на гербе?',
                rightAnswerId: 3,
                id: 4,
                answers: [
                    { text: 'Медведь и лиса', id: 1 },
                    { text: 'Заяц и волк', id: 2 },
                    { text: 'Медведь и соболь', id: 3 }
                ]
            },
            {
                question: 'Кто из знаменитых писателей родился в Екатеринбурге?',
                rightAnswerId: 1,
                id: 5,
                answers: [
                    { text: 'Решетников', id: 1 },
                    { text: 'Бажов', id: 2 },
                    { text: 'Мамин-Сибиряк', id: 3 },
                    { text: 'Пушкин', id: 4 }
                ]
            },
            {
                question: 'Сколько этажей в башне «Исеть»?',
                rightAnswerId: 3,
                id: 6,
                answers: [
                    { text: '40', id: 1 },
                    { text: '48', id: 2 },
                    { text: '52', id: 3 },
                    { text: '55', id: 4 }
                ]
            },
            {
                question: 'Сколько художественных фильмов снято на Свердловской киностудии?',
                rightAnswerId: 2,
                id: 7,
                answers: [
                    { text: 'Более 200', id: 1 },
                    { text: 'Около 300', id: 2 },
                    { text: 'Менее 150', id: 3 },
                ]
            },
            {
                question: 'Год основания Екатеринбурга?',
                rightAnswerId: 1,
                id: 8,
                answers: [
                    { text: '1723 год', id: 1 },
                    { text: '1730 год', id: 2 },
                    { text: '1811 год', id: 3 },
                    { text: '1921 год ', id: 4 }
                ]
            },
            {
                question: 'Сколько станций метро в городе?',
                rightAnswerId: 1,
                id: 9,
                answers: [
                    { text: '9', id: 1 },
                    { text: '11', id: 2 },
                    { text: '7', id: 3 },
                ]
            },
            {
                question: 'Какая улица самая длинная в Екб?',
                rightAnswerId: 1,
                id: 10,
                answers: [
                    { text: 'Шефская', id: 1 },
                    { text: 'Ленина', id: 2 },
                    { text: 'Белинского', id: 3 },
                    { text: 'Коммунистическая', id: 4 }
                ]
            }
        ]
    }
    onAnswerClick = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: { [answerId]: 'success' },
                results
            })

            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)

        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: { [answerId]: 'error' },
                results
            })
        }

    }
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }
    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>                
                    {
                        this.state.isFinished ?
                            <FinishedQuiz results={this.state.results} quiz={this.state.quiz} 
                            onRetry={this.retryHandler}/>  :
                            <ActiveQuiz answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClick}
                                questionPickture={this.state.quiz[this.state.activeQuestion].questionPickture}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />       
                    }
                </div>
            </div>
        )
    }
}
export default Quiz;