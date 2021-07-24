import React, {ChangeEvent, useState} from 'react';
import s from './Setting.module.css'

type SettingType = {
    maxValue: number
    minValue: number
    onChangeMaxHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMinHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Setting = (props: SettingType) => {

    return (
        <div className={s.input}>
            <span>max value: </span>
            <input
                className={props.maxValue <= props.minValue ? s.error : ''}
                value={props.maxValue}
                type={'number'}
                onChange={props.onChangeMaxHandler}
            />
            <span>min value: </span>
            <input
                className={props.minValue >= props.maxValue ||
                props.minValue < 0 ? s.error : ''}
                value={props.minValue}
                type={'number'}
                onChange={props.onChangeMinHandler}
            />
        </div>
    )
}