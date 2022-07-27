import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import benefitsSlice from '../features/benefits/benefitsSlice';
import counterReducer from '../features/counter/counterSlice';
import timerSlice from '../features/main/timer/timerSlice';
import priceSlice from '../features/priceAndOrder/price/priceSlice';
import qaSlice from '../features/qa/qaSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    benefits: benefitsSlice,
    price: priceSlice,
    qa: qaSlice,
    timer: timerSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
