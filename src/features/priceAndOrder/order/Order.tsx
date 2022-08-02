import React, { useState } from 'react'
import css from './Order.module.scss'
import PaperPlane1 from '../../../assets/PaperPlane1.svg'
import Shadow from '../../../assets/Shadow.svg'
import PaperPlane2 from '../../../assets/PaperPlane2.svg'

const Order = () => {

    const [customerName, setCustomerName] = useState('')
    const [customerBirthday, setCustomerBirthday] = useState('')
    const [customerPlace, setCustomerPlace] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [customerPassword, setCustomerPassword] = useState('')
    const [checkboxValue, setCheckboxValue] = useState(false)
    const [errorEmpty, setErrorEmpty] = useState(false)

    const send = () => {
        customerName === '' || customerBirthday === '' || customerPlace === '' || customerEmail === '' || customerPassword === '' || checkboxValue === false
            ? setErrorEmpty(true)
            : sendOrder()
    }

    const sendOrder = () => {
        let customer = {
            name: customerName,
            birthday: customerBirthday,
            place: customerPlace,
            email: customerEmail,
            password: customerPassword
        }
        console.log(customer)
    }

    return (
        <div className={css.order}>
            <h2>Зарегистрируйтесь, чтобы участвовать</h2>
            <div className={css.order__error}>
                {errorEmpty ? <p >Заполните все поля</p> : ''}
            </div>
            <div className={css.order__inputs}>
                <input
                    type="text"
                    placeholder='ФИО ребёнка'
                    onChange={event => setCustomerName(event.target.value)}
                    onFocus={() => { setErrorEmpty(false) }}
                    value={customerName}
                />
                <input
                    type="text"
                    placeholder='Дата рождения'
                    onChange={event => setCustomerBirthday(event.target.value)}
                    onFocus={() => { setErrorEmpty(false) }}
                    value={customerBirthday}
                />
                <input
                    type="text"
                    placeholder='Город'
                    onChange={event => setCustomerPlace(event.target.value)}
                    onFocus={() => { setErrorEmpty(false) }}
                    value={customerPlace}
                />
                <input
                    type="text"
                    placeholder='Email'
                    onChange={event => setCustomerEmail(event.target.value)}
                    onFocus={() => { setErrorEmpty(false) }}
                    value={customerEmail}
                />
                <input
                    type="text"
                    placeholder='Пароль'
                    onChange={event => setCustomerPassword(event.target.value)}
                    onFocus={() => { setErrorEmpty(false) }}
                    value={customerPassword}
                />
            </div>
            <div className={css.agreement}>
                <input
                    type="checkbox"
                    checked={checkboxValue}
                    onChange={() => setCheckboxValue(!checkboxValue)}
                />
                <p>Отправляя данные, я соглашаюсь с
                    <a href="/"> Условиями конкурса</a> и
                    <a href="/"> Политикой обработки данных</a></p>
            </div>
            <div className={css.paperPlanes}>
                <button
                    onClick={send}
                >Участвовать</button>
                <img className={css.paperPlanes__plane1} src={PaperPlane1} alt="" />
                <img className={css.paperPlanes__shadow} src={Shadow} alt="" />
                <img className={css.paperPlanes__plane2} src={PaperPlane2} alt="" />
                <img className={css.paperPlanes__plane3} src={PaperPlane1} alt="" />
            </div>
        </div>
    )
}

export default Order