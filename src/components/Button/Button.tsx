import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    title: string
    callback: () => void
    isDisabled?: boolean
}

export const Button = (props: ButtonType) => {
    return (
        <button
            className={s.button} onClick={() => props.callback()}
            disabled={props.isDisabled}
        >{props.title}
        </button>
    )
}