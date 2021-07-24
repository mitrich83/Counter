import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import {Display} from './components/Display/Display';
import {Button} from './components/Button/Button';
import {Setting} from './components/Setting/Setting';

export type NumbersType = {
    number: number
}

const App = () => {
    const [maxValue, setMaxValue] = useState<number>(0)

    const [minValue, setMinValue] = useState<number>(0)

    const [value, setValue] = useState<number | string>(0)

   // const [error, setError] =useState<string>('')

    const [isDisabled, setIsDisabled] = useState<boolean>(false)


    const incNumber = () => {
        if (value > maxValue) return;
        else (setValue(+value + 1))
    }

    const resetNumber = () => { setValue(minValue)}

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem(
            'maxValue', JSON.stringify(e.currentTarget.value))
        setMaxValue(+e.currentTarget.value)
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem(
            'minValue', JSON.stringify(e.currentTarget.value))
        setMinValue(+e.currentTarget.value)
    }

    useEffect(() => {
        const minValue = localStorage.getItem('minValue');

        const maxValue = localStorage.getItem('maxValue');

        if (minValue && maxValue) {
            setMinValue(+minValue)
            setMaxValue(+maxValue)
        }
    }, [])

    useEffect(() => {
        if (maxValue < minValue ||
            minValue < 0 ||
            maxValue === minValue
        ) {
            setValue('Incorrect value!')
            setIsDisabled(true)
            return;
        }
        setValue(minValue)
        setIsDisabled(false)
    }, [minValue, maxValue])

    const setButtonNumber = () => {
        setValue(minValue)
        setIsDisabled(true)
    }

    return (
        <div className={'counter'}>
            <div className={'showNumbers'}>
                <div className={'display'}>
                    <Display value={value}
                             maxValue={maxValue}
                            // error={error}
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
