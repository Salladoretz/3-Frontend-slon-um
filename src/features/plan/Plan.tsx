import React from 'react'
import css from './Plan.module.scss'
import PaperPlane1 from '../../assets/PaperPlane1.svg'


const Plan = () => {

    return (
        <div className={css.plan}>
            <h2>Пошаговый <span className={css.underline}>план</span></h2>
            <div className={css.plan__container}>
                <div className={css.plan__wrapper + ' ' + css.plan__point1}>
                    <div className={css.plan__point}>1</div>
                    <p className={css.plan__comment1}>Зарегистрируйтесь на конкурс <a href="/">
                        <span>Здесь</span>
                    </a></p>
                </div>
                <div className={css.plan__wrapper + ' ' + css.plan__point2}>
                    <div className={css.plan__point}>2</div>
                    <p className={css.plan__comment2}>Выполните все условия конкурса</p>
                </div>
                <div className={css.plan__wrapper + ' ' + css.plan__point3}>
                    <div className={css.plan__point}>3</div>
                    <p className={css.plan__comment3}>Загрузите рисунок <a href="/">
                        <span>Здесь</span>
                    </a> или в Личном кабинете</p>
                </div>
            </div>
            <img className={css.plan__paperPlane} src={PaperPlane1} alt="" />
        </div>
    )
}

export default Plan