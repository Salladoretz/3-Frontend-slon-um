import React from 'react'
import { useAppSelector } from '../../app/hooks'
import QACard from './qaCard/QACard'
import css from './QA.module.scss'

const QA = () => {

    const qaList = useAppSelector(state => state.qa)

    return (
        <div className={css.qa}>
            <h2>Вопрос/Ответ</h2>
            {qaList.map((item, index) =>
                <QACard
                    key={index}
                    question={item.question}
                    answer={item.answer}
                />)}
        </div>
    )
}

export default QA