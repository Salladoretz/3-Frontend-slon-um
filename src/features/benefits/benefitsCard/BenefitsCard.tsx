import React from 'react'
import { benefitCardState } from '../../../app/dataSlice'
import css from './BenefitsCard.module.scss'


const BenefitsCard: React.FC<benefitCardState> = ({ icon, text, decoratedWords }) => {


    return (
        <div className={css.benefitCard}>
            <img src={icon} alt='' />
            <p>
                {text.split(' ').map(item => decoratedWords.includes(item)
                    ? <a href="/">
                        <span className={css.benefitCard_decoratedWords}>{item} </span>
                    </a>
                    : <span>{item} </span>)}
            </p>
        </div>
    )
}

export default BenefitsCard