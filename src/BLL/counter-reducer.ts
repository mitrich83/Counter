import {ReturnStateType} from '../App';
import {AppStateType} from './store';


const InitialState = {
    value: 0 as number | string,
    minValue: 0,
    maxValue: 0,
    isDisabled: false
}

type InitialStateType = typeof InitialState

export const counterReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {
                ...state, value: action.value + 1
            }
        case 'RESET-VALUE': {
            return {
                ...state, value: action.minValue
            }
        }
        case 'SET-MAX-VALUE': {
            return {
                ...state, maxValue: action.maxValue
            }
        }
        case 'SET-MIN-VALUE': {
            return {
                ...state, minValue: action.minValue
            }
        }
        case 'SET-DISABLE': {
            return {
                ...state, isDisabled: action.isDisabled
            }
        }
        case 'SET-VALUE': {
            return {
                ...state, value: action.value
            }
        }
        default:
            return state
    }

}

export const incValueAC = (value: number) => ({type: 'INC-VALUE', value} as const)
export const resetValueAC = (minValue: number) => ({type: 'RESET-VALUE', minValue} as const)
export const MaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)
export const MinValueAC = (minValue: number) => ({type: 'SET-MIN-VALUE', minValue} as const)
export const disableButtonAC = (isDisabled: boolean) => ({type: 'SET-DISABLE', isDisabled} as const)
export const setValueAC = (value: number | string) => ({type: 'SET-VALUE', value} as const)

export type IncValueActionType = ReturnType<typeof incValueAC>
export type ResetValueActionType = ReturnType<typeof resetValueAC>
export type MaxValueActionType = ReturnType<typeof MaxValueAC>
export type MinValueActionType = ReturnType<typeof MinValueAC>
export type DisableButtonActionType = ReturnType<typeof disableButtonAC>
export type SetValueActionType = ReturnType<typeof setValueAC>

export type ActionType =
    IncValueActionType
    | ResetValueActionType
    | MaxValueActionType
    | MinValueActionType
    | DisableButtonActionType
    | SetValueActionType

