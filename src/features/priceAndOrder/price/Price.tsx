import React from 'react'
import css from './Price.module.scss'
import { useAppSelector } from '../../../app/hooks'
import VK from '../../../assets/VK.svg'
import OK from '../../../assets/OK.svg'

const Price = () => {

    const prices = useAppSelector(state => state.price)

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
                <div className={css.price__bottomButtons}>
                    <button className={css.price__buttonVK}>
                        <img src={VK} alt="" />
                    </button>
                    <button className={css.price__buttonOK}>
                        <img src={OK} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Price