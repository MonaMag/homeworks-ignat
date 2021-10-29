import React, {useCallback, useEffect} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {changeThemeAC, themeReducerActionsType, ThemeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themesOptions: ThemeType[] = ['dark', 'red', 'some', 'myTheme'];

function HW12() {
    const dispatch = useDispatch<Dispatch<themeReducerActionsType>>()
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)

    useEffect(() => {
        if (theme) {
            dispatch(changeThemeAC(theme))
        }
    }, [dispatch, theme])

    const onChangeCallback = useCallback(((theme: ThemeType) => {
        if (theme)
            dispatch(changeThemeAC(theme))
    }), [dispatch])

    /*   const onChangeCallback = useCallback((e: ChangeEvent<HTMLSelectElement>) =>
           dispatch(changeThemeAC(e.currentTarget.value as ThemeType)), [theme, dispatch])*/

    return (
        <div className={s[theme]} style={{padding: '10px'}}>
            <hr/>
            <h3 className={s[theme + '-text']}>homework 12</h3>
            {/*<span className={s[theme + '-text']} style={{marginRight: '10px'}}>
                    homeworks 12
            </span>*/}

            <SuperSelect style={{width: '100px'}}
                         value={theme}
                         options={themesOptions}
                         onChangeOption={onChangeCallback}

            />

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
