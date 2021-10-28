import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (e: any, value: number | number[]) => void
    value?: [number, number]
    onChange?: (value: [number, number]) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChange, onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Slider
                getAriaLabel={() => 'range-slider'}
                value={value}
                onChange={onChangeRange}
                valueLabelDisplay="auto"
            />
        </>
    )
}

export default SuperDoubleRange
