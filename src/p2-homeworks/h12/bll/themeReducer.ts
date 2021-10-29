

export type ThemeType = 'some' | 'red' | 'dark' | 'myTheme'
export type initStateType = typeof initState

const initState = {
    theme: 'some' as ThemeType
}

export const themeReducer = (state: initStateType = initState, action: themeReducerActionsType): initStateType => { // fix any
    switch (action.type) {
        case 'mona/themeReducer/CHANGE_THEME': {
            return {...state, theme: action.theme}
        }
        default: return state;
    }
};



export type themeReducerActionsType = ReturnType<typeof changeThemeAC>

//* ActionCreators ----------------------------------------------------------------------->
export const changeThemeAC = (theme: ThemeType)  => ({type: 'mona/themeReducer/CHANGE_THEME', theme} as const);