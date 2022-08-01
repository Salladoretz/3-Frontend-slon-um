import React from 'react'
import css from './Main.module.scss'
import Logo from '../../assets/Logo.svg'
import Timer from './timer/Timer'
import Picture from './picture/Picture'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className={css.main}>
            <div className={css.main__header}>
                <div className={css.main__logo}>
                    <img src={Logo} alt='' />
                    <p>Слон<span>УМ</span></p>
                </div>
                <Link to='3-Frontend-slonUm-alt'>
                    <button>Войти</button>
                </Link>
            </div>
            <div className={css.main__container}>
                <div className={css.main__picture}>
                    <Picture />
                </div>
                <div className={css.main__info}>
                    <div className={css.main__infoWrapper}>
                        <p className={css.main__headlineTop}>От компании СлонУМ</p>
                        <h1>Всероссийский конкурс Детского рисунка</h1>
                        <p className={css.main__headlineMiddle}>Участвуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов</p>
                        <div className={css.main__headlineBottom}>
                            <button>Участвовать</button>
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.main__description}>
                <p>Компания <span>СлонУм</span>  – проводит конкурс для детей, в котором могут участвовать ребята
                    <span> всех возрастов! </span>
                    Номинации, в которых можно победить. Есть возможность проявить себя во всех направлениях и даже
                    <span> без художественных способностей.</span></p>
            </div>
        </div>
    )
}

export default Main