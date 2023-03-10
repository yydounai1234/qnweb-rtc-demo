import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import settings from "./features/settingSlice"
import identity from "./features/identitySlice"
import webrtc from "./features/webrtcSlice"
import message from "./features/messageSlice"

export const store = configureStore({
  reducer: {
    settings,
    identity,
    webrtc,
    message,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
