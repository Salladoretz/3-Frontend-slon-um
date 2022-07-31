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