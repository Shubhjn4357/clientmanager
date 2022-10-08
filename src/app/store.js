import { configureStore } from '@reduxjs/toolkit'
import StateManager from '../feature/StateManager';
export default configureStore({
  reducer: {
    main:StateManager
  },
})