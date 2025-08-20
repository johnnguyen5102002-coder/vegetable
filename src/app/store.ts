import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { quotesApiSlice } from "../features/quotes/quotesApiSlice"
import productReducer from "../features/products/productSlice.ts"

// Tạo store
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: {
      // ✅ RTK Query slice
      [quotesApiSlice.reducerPath]: quotesApiSlice.reducer,
      // ✅ Reducer của product
      products: productReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(quotesApiSlice.middleware),
    preloadedState,
  })

  // setup listeners cho RTK Query (refetchOnFocus, refetchOnReconnect)
  setupListeners(store.dispatch)
  return store
}

// Tạo store mặc định
export const store = makeStore()

// Types
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore["dispatch"]

// Thunk type nếu cần
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
