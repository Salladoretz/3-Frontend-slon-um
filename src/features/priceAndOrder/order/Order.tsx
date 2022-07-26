import React from 'react'
import css from './Order.module.scss'
import PaperPlanes from '../../../assets/PaperPlanes.svg'

const Order = () => {
    return (
        <div className={css.order}>
            <h2>Зарегистрируйтесь, чтобы участвовать</h2>
            <div className={css.order__inputs}>
                <input type="text" placeholder='ФИО ребёнка' />
                <input type="text" placeholder='Дата рождения' />
                <input type="text" placeholder='Город' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Пароль' />
            </div>
            <div className={css.agreement}>
                <input type="checkbox" />
                <p>Отправляя данные, я соглашаюсь с
                    <a href="/"> Условиями конкурса</a> и
                    <a href="/"> Политикой обработки данных</a></p>
            </div>
            <div className={css.order__accept}>
                <button>Участвовать</button>
                <img src={PaperPlanes} alt="" />
            </div>
        </div>
    )
}

export default Order