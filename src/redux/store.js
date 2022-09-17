import {configureStore} from '@reduxjs/toolkit'
import modeSlice from './darkmode/modeSlice'
import nameSlice from './name/nameSlice'
import todoslice from './todos/todoslice'

export const store=configureStore({
    reducer:{
       todos:todoslice,
       mode:modeSlice,
       name:nameSlice
    }
})