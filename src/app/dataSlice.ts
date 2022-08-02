import { createSlice } from '@reduxjs/toolkit'
import Star from '../assets/Star.svg'
import Winner from '../assets/Winner.svg'
import Sertificate from '../assets/Sertificate.svg'
import Gift from '../assets/Gift.svg'
import Email from '../assets/Email.svg'
import Calendar from '../assets/Star.svg'

export type benefitCardState = {
    icon: string,
    text: string,
    decoratedWords: string[]
}

export type qaState = {
    question: string,
    answer: string,
}

export type dataState = {
    contacts: {
        vk: string,
        ok: string,
        telegram: string
    },
    deadline: Date,
    benefits: Array<benefitCardState>,
    prices: {
        price: number,
        discountPrice: number
    },
    qa: Array<qaState>
}

const initialState: dataState = {
    contacts: {
        vk: '/',
        ok: '/',
        telegram: '/'
    },
    deadline: new Date('September 1, 2022 10:00:00 +0300'),
    benefits: [
        {
            icon: Star,
            text: 'Шанс занять 1 место — в вашем городе и по всей России',
            decoratedWords: []
        },
        {
            icon: Winner,
            text: 'Развитие самостоятельности + свободное время для родителей ;)',
            decoratedWords: []
        },
        {
            icon: Sertificate,
            text: 'Персональный диплом в разных номинациях каждому участнику',
            decoratedWords: []
        },
        {
            icon: Gift,
            text: 'Призы и скидки для подписчиков и авторизованных пользователей',
            decoratedWords: []
        },
        {
            icon: Email,
            text: 'Бесплатный диплом на email — через 1 день после конкурса',
            decoratedWords: []
        },
        {
            icon: Calendar,
            text: 'Публикация работ победителей во ВКонтакте. Подписывайтесь!',
            decoratedWords: ['Подписывайтесь!']
        }
    ],
    prices: {
        price: 299,
        discountPrice: 149
    },
    qa: [
        {
            question: 'Может ли ребёнок заниматься самостоятельно?',
            answer: 'Какой-то ответ.'
        },
        {
            question: 'Как происходит оплата?',
            answer: ''
        },
        {
            question: 'Есть ли гарантии усвоения материала?',
            answer: ''
        },
        {
            question: 'С кем будет общаться мой ребёнок?',
            answer: ''
        },
        {
            question: 'Каковы принципы обучения?',
            answer: ''
        },
        {
            question: 'Сколько раз в неделю можно заниматься?',
            answer: ''
        }
    ]
}


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {}
})

export default dataSlice.reducer