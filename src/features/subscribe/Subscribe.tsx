import React from 'react'
import css from './Subscribe.module.scss'

const Subscribe = () => {
    return (
        <div className={css.subscribe}>
            <h2>Подпишись на нашу рассылку</h2>
            <p>Обещаем присылать только самое важное
                <br></br>
                и интересное :)</p>
            <div className={css.subscribe__form}>
                <input type="email" placeholder='Email' />
                <button>Отправить</button>
            </div>
            <div className={css.agreement}>
                <input type="checkbox" />
                <p>Отправляя данные, я соглашаюсь с
                    <a href="/"> Условиями конкурса</a>
                    <br></br>
                    и <a href="/"> Политикой обработки данных</a></p>
            </div>
        </div>
    )
}

export default Subscribe