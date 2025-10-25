import type { TypeRootState, AppDispatch } from "./redux.types";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

/** useAppDispatch — a typed version of the Redux `useDispatch` hook. */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** useAppSelector — типизированная версия хука Redux `useSelector`. */
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
