import { createSlice } from '@reduxjs/toolkit'


export type qaState = {
    question: string,
    answer: string,
}

const initialState: Array<qaState> = [
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



export const qaSlice = createSlice({
    name: 'qa',
    initialState,
    reducers: {}
})

export default qaSlice.reducer