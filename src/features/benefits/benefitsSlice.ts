import { createSlice } from '@reduxjs/toolkit'
import Star from '../../assets/Star.svg'
import Winner from '../../assets/Winner.svg'
import Sertificate from '../../assets/Sertificate.svg'
import Gift from '../../assets/Gift.svg'
import Email from '../../assets/Email.svg'
import Calendar from '../../assets/Star.svg'


export type benefitCardState = {
    icon: string,
    text: string,
    decoratedWords: string[]
}

const initialState: Array<benefitCardState> = [
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
]

export const benefitsSlice = createSlice({
    name: 'benefits',
    initialState,
    reducers: {}
})

export default benefitsSlice.reducer