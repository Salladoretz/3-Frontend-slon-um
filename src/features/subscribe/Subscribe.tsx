import React, { useState } from 'react'
import css from './Subscribe.module.scss'

const Subscribe = () => {

    const [subscriberEmail, setSubscriberEmail] = useState('')
    const [checkboxValue, setCheckboxValue] = useState(false)

    const subscribe = () => { }

    return (
        <div className={css.subscribe}>
            <h2>Подпишись на нашу рассылку</h2>
            <p>Обещаем присылать только самое важное
                <br></br>
                и интересное :)</p>
            <div className={css.subscribe__form}>
                <input
                    type="email"
                    placeholder='Email'
                    onChange={event => setSubscriberEmail(event.target.value)}
                    value={subscriberEmail}
                />
                <button
                    onClick={() => subscribe()}
                >Отправить</button>
            </div>
            <div className={css.agreement}>
                <input
                    type="checkbox"
                    checked={checkboxValue}
                    onChange={() => setCheckboxValue(!checkboxValue)}
                />
                <p>Отправляя данные, я соглашаюсь с
                    <a href="/"> Условиями конкурса</a> и <a href="/"> Политикой обработки данных</a></p>
            </div>
        </div>
    )
}

export default Subscribe