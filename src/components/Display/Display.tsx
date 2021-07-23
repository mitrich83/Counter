import React from 'react';
import s from './Display.module.css'
import {upperNumberLimit} from '../../App';

type DisplayType = {
    number?: number
    maxValue?: number
    minValue?: number
}

export const Display = (props: DisplayType) => {
    return (
        <div className={props.number === upperNumberLimit ? s.limit : ''}>
            {props.number}
        </div>
    )
}