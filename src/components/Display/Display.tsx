import React from 'react';
import s from './Display.module.css'

type DisplayType = {
    value: number | string
    maxValue: number
}

export const Display = (props: DisplayType) => {

    return (
        <div className={props.value === props.maxValue ? s.limit : ''}>
            {props.value}
        </div>
    )
}