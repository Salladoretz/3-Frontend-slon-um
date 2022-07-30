import React from 'react'
import css from './Footer.module.scss'
import Telegram from '../../assets/Telegram.svg'
import SMM from '../../assets/SMM.svg'
import VK_blue from '../../assets/VK_blue.svg'
import Shevron_up from '../../assets/Shevron_up.svg'

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.footer__content}>
                <div className={css.footer__smm}>
                    <p>Наши соцсети:</p>
                    <div className={css.footer__smmButtons}>
                        <a href="/">
                            <img src={Telegram} alt="" />
                        </a>
                        <a href="/">
                            <img src={SMM} alt="" />
                        </a>
                        <a href="/">
                            <img src={VK_blue} alt="" />
                        </a>
                    </div>
                </div>
                <div className={css.footer__links}>
                    <a href="/">Главная</a>
                    <a href="/">Личный кабинет</a>
                    <a href="/">Контакты</a>
                    <a href="/">Конфиденциальность</a>
                </div>
                <a href='/' className={css.footer__up}>
                    <img src={Shevron_up} alt="" />
                </a>
            </div>
            <div className={css.footer__copiright}>
                <p>@ Все права защищены.  ООО”Слонум” 2022</p>
            </div>
        </div >
    )
}

export default Footer