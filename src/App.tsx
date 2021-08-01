import React, {ChangeEvent, useEffect, useState} from 'react';
import {Route, NavLink, useHistory} from 'react-router-dom';
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
    const [isDisabled, setIsDisabled] = useState<boolean>(false)


    const incNumber = () => {
        if (value > maxValue) return;
        else (setValue(+value + 1))
    }
    const resetNumber = () => {
        setValue(minValue)
    }
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
    const setButtonNumber = () => {
        setValue(minValue)
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

    return (
        <div className={'counter'}>
            <div className={'showDisplay'}>
                <Route path={'/display'}>
                    <div className={'display'}>
                        <Display value={value} maxValue={maxValue}/>
                    </div>
                    <div className={'buttonsDisplay'}>
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
                        <NavLink to={'/setting'}>
                            <Button title={'Set'}
                                    callback={setButtonNumber}
                                    value={value}
                            />
                        </NavLink>
                    </div>
                </Route>
            </div>
            <div className={'showSettings'}>
                <Route path={'/setting'}>
                    <div className={'setting'}>
                        <Setting maxValue={maxValue}
                                 minValue={minValue}
                                 onChangeMaxHandler={onChangeMaxHandler}
                                 onChangeMinHandler={onChangeMinHandler}
                        />
                    </div>
                    <div className={'buttonSetting'}>
                        <NavLink to={'/display'}>
                            <Button
                                title={'Set'}
                                value={value}
                                callback={setButtonNumber}
                                isDisabled={isDisabled}
                            />
                        </NavLink>
                    </div>
                </Route>
            </div>
        </div>
    )
}
export default App;
