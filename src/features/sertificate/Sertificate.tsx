import React from 'react'
import css from './Sertificate.module.scss'
import Sertificate_big from '../../assets/Sertificate_big.svg'

const Sertificate = () => {
    return (
        <div className={css.sertificate}>
            <div className={css.sertificate__info}>
                <h2>Выдаём <span className={css.underline}>дипломы</span> участникам</h2>
                <p>Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети!</p>
                <p>Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail.</p>
                <p>Со слоном к победам напролом!</p>
            </div>
            <div className={css.sertificate__void}></div>
            <div className={css.sertificate__picture}>
                <img src={Sertificate_big} alt="" />
            </div>
        </div>
    )
}

export default Sertificate