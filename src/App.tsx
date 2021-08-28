import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css'
import {Display} from './components/Display/Display';
import {Button} from './components/Button/Button';
import {Setting} from './components/Setting/Setting';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './BLL/store';
import {
    ActionType,
    disableButtonAC,
    incValueAC,
    MaxValueAC,
    MinValueAC,
    resetValueAC,
    setValueAC
} from './BLL/counter-reducer';
import {Dispatch} from 'redux';

export type ReturnStateType = {
    value: number | string,
    minValue: number,
    maxValue: number,
    isDisabled: boolean
}

const App = () => {
    const value = useSelector<AppStateType, number | string>(state => state.counter.value)
    const minValue = useSelector<AppStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const isDisabled = useSelector<AppStateType, boolean>(state => state.counter.isDisabled)

    const dispatch = useDispatch<Dispatch<ActionType>>()


    const incNumber = () => {
        if (value >= maxValue) return;
        else dispatch(incValueAC(+value))
    }
    const resetNumber = () => {
        dispatch(resetValueAC(+minValue))
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('minValue', (e.currentTarget.value))
        dispatch(MinValueAC(+e.currentTarget.value))
    }
    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem('maxValue', (e.currentTarget.value))
        dispatch(MaxValueAC(+e.currentTarget.value))
    }

    useEffect(() => {
        const minValue = localStorage.getItem('minValue')

        const maxValue = localStorage.getItem('maxValue');

        if (minValue && maxValue) {
            dispatch(MinValueAC(+minValue))
            dispatch(MaxValueAC(+maxValue))
        }
    }, [])

    useEffect(() => {
        if (maxValue <= minValue ||
            minValue < 0
        ) {
            dispatch(setValueAC('Incorrect value!'))
            dispatch(disableButtonAC(true))
            return;
        } else
            dispatch(setValueAC(minValue))
            dispatch(disableButtonAC(false))
    }, [minValue, maxValue])

    const setButtonNumber = () => {
        dispatch(setValueAC(minValue))
        dispatch(disableButtonAC(true))
    }

    return (
        <div className={s.counter}>
            <div className={s.showNumbers}>
                <div className={s.display}>
                    <Display value={value}
                             maxValue={maxValue}
                    />
                </div>
                <div>
                    <Button title={'Inc'}
                            callback={incNumber}
                            isDisabled={value === maxValue}
                    />
                    <Button title={'Reset'}
                            callback={resetNumber}
                            isDisabled={value === minValue}
                    />
                </div>
            </div>
            <div className={s.showSettings}>
                <div className={s.setting}>
                    <Setting maxValue={maxValue}
                             minValue={minValue}
                             onChangeMaxHandler={onChangeMaxHandler}
                             onChangeMinHandler={onChangeMinHandler}
                    />
                </div>
                <div>
                    <Button
                        title={'Set'}
                        callback={setButtonNumber}
                        isDisabled={isDisabled}
                    />
                </div>
            </div>
        </div>
    )
}
export default App;
