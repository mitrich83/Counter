import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
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
    value: number | string
    isDisabled: boolean
}


// const qwe = (state: any): ReturnStateType => state.counter;

const App = () => {
     const minValue = Number(localStorage.getItem('minValue'));
     const maxValue = Number(localStorage.getItem('maxValue'));

    const value = useSelector<AppStateType, number|string>(state => state.counter.value)
    const isDisabled = useSelector<AppStateType, boolean>(state => state.counter.isDisabled)
    const dispatch = useDispatch<Dispatch<ActionType>>()

    const incNumber = () => {
        if (value > maxValue) return;
        else dispatch(incValueAC(+value + 1))
    }
    const resetNumber = () => {
        dispatch(resetValueAC(minValue))
    }


    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem(
            'maxValue', JSON.stringify(e.currentTarget.value))
        dispatch(MaxValueAC(+e.currentTarget.value))
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem(
            'minValue', JSON.stringify(e.currentTarget.value))
        dispatch(MinValueAC(+e.currentTarget.value))
    }

    useEffect(() => {
        if (minValue && maxValue) {
            dispatch(MinValueAC(minValue))
            dispatch(MaxValueAC(maxValue))
        }
    }, [])

    useEffect(() => {
        if (maxValue < minValue ||
            minValue < 0 ||
            maxValue === minValue
        ) {
            dispatch(setValueAC('Incorrect value!'))
            dispatch(disableButtonAC(true))
            return;
        }
        dispatch(setValueAC(minValue))
        dispatch(disableButtonAC(false))
    }, [minValue, maxValue])

    const setButtonNumber = () => {
        dispatch(setValueAC(minValue))
        dispatch(disableButtonAC(true))
    }

    return (
        <div className={'counter'}>
            <div className={'showNumbers'}>
                <div className={'display'}>
                    <Display value={value}
                             maxValue={maxValue}
                    />
                </div>
                <div>
                    <Button title={'Inc'}
                            callback={incNumber}
                            value={value}
                            isDisabled={value === maxValue}
                    />
                    <Button title={'Reset'}
                            callback={resetNumber}
                            value={value}
                            isDisabled={value === minValue}
                    />
                </div>
            </div>
            <div className={'showSettings'}>
                <div className={'setting'}>
                    <Setting maxValue={maxValue}
                             minValue={minValue}
                             onChangeMaxHandler={onChangeMaxHandler}
                             onChangeMinHandler={onChangeMinHandler}
                    />
                </div>
                <div>
                    <Button
                        title={'Set'}
                        value={value}
                        callback={setButtonNumber}
                        isDisabled={isDisabled}
                    />
                </div>
            </div>
        </div>
    )
}
export default App;
