import React from 'react'
import css from './Benefits.module.scss'
import { useAppSelector } from '../../app/hooks'
import BenefitsCard from './benefitsCard/BenefitsCard'

const Benefits = () => {

    const benefits = useAppSelector(state => state.data.benefits)

    return (
        <div className={css.benefits}>
            <div className={css.benefits__waves}>
                <h2>Для чего <span className={css.underline}>нужно</span> участвовать</h2>
                <div className={css.benefits__cards}>
                    {benefits.map((item, index) =>
                        <BenefitsCard
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            decoratedWords={item.decoratedWords}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Benefits