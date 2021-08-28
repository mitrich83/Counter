import React, {ChangeEvent} from 'react';
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
            <div className={s.maxInput}>
                <span>max value: </span>
                <input
                    className={props.maxValue <= props.minValue ? s.error : ''}
                    value={props.maxValue}
                    type={'number'}
                    onChange={props.onChangeMaxHandler}
                />
            </div>
            <div className={s.minInput}>
                <span>min value: </span>
                <input
                    className={props.minValue >= props.maxValue ||
                    props.minValue < 0 ? s.error : ''}
                    value={props.minValue}
                    type={'number'}
                    onChange={props.onChangeMinHandler}
                />
            </div>
        </div>
    )
}