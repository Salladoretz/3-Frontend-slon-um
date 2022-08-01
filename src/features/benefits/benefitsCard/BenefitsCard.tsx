import React from 'react'
import { benefitCardState } from '../../../app/dataSlice'
import { useAppSelector } from '../../../app/hooks'
import css from './BenefitsCard.module.scss'


const BenefitsCard: React.FC<benefitCardState> = ({ icon, text, decoratedWords }) => {

    const contacts = useAppSelector(state => state.data.contacts)

    return (
        <div className={css.benefitCard}>
            <img src={icon} alt='' />
            <p>
                {text.split(' ').map((item, index) => decoratedWords.includes(item)
                    ? <a key={index} href={contacts.vk}>
                        <span className={css.benefitCard_decoratedWords}>{item} </span>
                    </a>
                    : <span key={index}>{item} </span>)}
            </p>
        </div>
    )
}

export default BenefitsCard