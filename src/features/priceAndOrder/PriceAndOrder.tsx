import React from 'react'
import Order from './order/Order'
import Price from './price/Price'
import css from './PriceAndOrder.module.scss'

const PriceAndOrder = () => {
    return (
        <div className={css.priceAndOrder}>
            <Price />
            <Order />
        </div>
    )
}

export default PriceAndOrder