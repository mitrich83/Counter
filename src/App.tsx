import React, {useState} from 'react';
import './App.css'
import {Display} from './components/Display/Display';
import {Button} from './components/Button/Button';

export const lowNumberLimit = 1
export const upperNumberLimit = 8

export type NumbersType = {
    number: number
}
const App = () => {
    let [number, setNumber] = useState<number>(lowNumberLimit)

    const incNumber = () => {
        if (number > upperNumberLimit) return
        else (
            setNumber(number + 1)
        )
    }

    const resetNumber = () => {
        return (
            setNumber(lowNumberLimit)
        )
    }

    return (
        <div className={'counter'}>
            <div className={'showNumbers'}>
                <div className={'display'}>
                    <Display number={number}/>
                </div>
                <div>
                    <Button title={'Inc'}
                            callback={incNumber}
                            number={number}
                            disable={number === upperNumberLimit}/>
                    <Button title={'Reset'}
                            callback={resetNumber}
                            number={number}
                            disable={number === lowNumberLimit}/>
                </div>
            </div>
            <div className={'showSettings'}>
                <div className={'display'}>
                    <Display number={number}/>
                </div>
                <div>
                    <Button title={'Set'}
                            callback={incNumber}
                            number={number}
                            disable={number === upperNumberLimit}/>
                </div>
            </div>
        </div>
    )
}
export default App;