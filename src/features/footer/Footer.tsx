import React from 'react'
import css from './Footer.module.scss'
import Telegram from '../../assets/Telegram.svg'
import SMM from '../../assets/SMM.svg'
import VK from '../../assets/VK.svg'
import Shevron_up from '../../assets/Shevron_up.svg'
import { useAppSelector } from '../../app/hooks'


const Footer = () => {

    const contacts = useAppSelector(state => state.data.contacts)

    return (
        <div className={css.footer}>
            <div className={css.footer__content}>
                <div className={css.footer__smm}>
                    <p>Наши соцсети:</p>
                    <div className={css.footer__smmLinks}>
                        <a href={contacts.telegram}>
                            <img src={Telegram} alt="" />
                        </a>
                        <a href="/">
                            <img src={SMM} alt="" />
                        </a>
                        <a href={contacts.vk}>
                            <img src={VK} alt="" />
                        </a>
                    </div>
                </div>
                <div className={css.footer__links}>
                    <a href="/">Главная</a>
                    <a href="/">Личный кабинет</a>
                    <a href="/">Контакты</a>
                    <a href="/">Конфиденциальность</a>
                </div>
                <button
                    className={css.footer__up}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }}
                >
                    <img src={Shevron_up} alt="" />
                </button>
            </div>
            <div className={css.footer__copiright}>
                <p>@ Все права защищены.  ООО”Слонум” 2022</p>
            </div>
        </div >
    )
}

export default Footer