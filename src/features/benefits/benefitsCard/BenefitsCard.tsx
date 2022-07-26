import React from 'react'
import { benefitCardState } from '../benefitsSlice'
import css from './BenefitsCard.module.scss'


const BenefitsCard: React.FC<benefitCardState> = ({ icon, text, decoratedWords }) => {


    return (
        <div className={css.benefitCard}>
            <img src={icon} alt='' />
            <p>
                {text.split(' ').map(item => decoratedWords.includes(item)
                    ? <span className={css.benefitCard_decoratedWords}>{item} </span>
                    : <span>{item} </span>)}
            </p>
        </div>
    )
}

export default BenefitsCard