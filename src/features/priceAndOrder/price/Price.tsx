import React from 'react'
import css from './Price.module.scss'
import { useAppSelector } from '../../../app/hooks'
import VK from '../../../assets/VK.svg'
import OK from '../../../assets/OK.svg'

const Price = () => {

    const prices = useAppSelector(state => state.data.prices)
    const contacts = useAppSelector(state => state.data.contacts)

    return (
        <div className={css.price}>
            <div className={css.price__top}>
                <svg width="292" height="110" viewBox="0 0 292 110" fill="" xmlns="http://www.w3.org/2000/svg">
                    <path d="M281.07 14.7005H292L281.07 0V14.7005Z" fill="#0E8958" />
                    <path d="M10.9305 14.7005H0L10.9305 0V14.7005Z" fill="#0E8958" />
                    <path d="M281.07 14.7005V0H10.9305V14.7005V110L146 74.5161L281.07 110V14.7005Z" fill="var(--mainAccentColor)" />
                </svg>
                <p>Скидка за репост</p>
            </div>
            <div className={css.price__middle}>
                <p>Стоимость участия</p>
                <div className={css.price__prices}>
                    <p>{prices.discountPrice}{String.fromCharCode(8381)}</p>
                    <p>{prices.price}{String.fromCharCode(8381)}</p>
                </div>
                <p>При наличии репоста в соцсетях :)</p>
            </div>
            <div className={css.price__bottom}>
                <p>Получить скидку:</p>
                <div className={css.price__SMM}>
                    <a href={contacts.telegram}>
                        <img className={css.price__SMM_VK} src={VK} alt="" />
                    </a>
                    <a href={contacts.vk}>
                        <img className={css.price__SMM_OK} src={OK} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Price