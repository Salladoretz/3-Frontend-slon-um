import React from 'react'
import css from './Order.module.scss'
import PaperPlane1 from '../../../assets/PaperPlane1.svg'
import Shadow from '../../../assets/Shadow.svg'
import PaperPlane2 from '../../../assets/PaperPlane2.svg'

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
            <div className={css.paperPlanes}>
                <button>Участвовать</button>
                <img className={css.paperPlanes__plane1} src={PaperPlane1} alt="" />
                <img className={css.paperPlanes__shadow} src={Shadow} alt="" />
                <img className={css.paperPlanes__plane2} src={PaperPlane2} alt="" />
                <img className={css.paperPlanes__plane3} src={PaperPlane1} alt="" />
            </div>
        </div>
    )
}

export default Order