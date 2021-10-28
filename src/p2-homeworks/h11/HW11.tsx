import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, newValue: number | number[]) => {
        if(newValue instanceof Array) {
        setValue1(newValue[0])
        setValue2(newValue[1])
        }
    }
    return (
        <div>
            <hr/>
            <h3>homework 11</h3>
            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={setValue1}
                    value={value1}
                />
            </div>



            <div>
                <div className={s.par}><span>{value1}</span>
                    <span>{value2}</span>
                </div>

                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    value={[value1, value2]}
                    onChangeRange={onChangeHandler}
                />
            </div>



            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
