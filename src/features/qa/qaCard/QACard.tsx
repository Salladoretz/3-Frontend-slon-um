import React, { useState } from 'react'
import { qaState } from '../qaSlice'
import css from './QACard.module.scss'
import Cross from '../../../assets/Cross.svg'

const QACard: React.FC<qaState> = (qa) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={css.qaCard}>
            <div className={css.qaCard__question}>
                <p>{qa.question}</p>
                <button
                    onClick={() => setIsOpen(!isOpen)}>
                    <img src={Cross} alt="" />
                </button>
            </div>
            <div className={isOpen ? '' : css.qaCard__answer_close}>
                <p>{qa.answer}</p>
            </div>
        </div>
    )
}

export default QACard