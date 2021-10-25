import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            } else {
                return [...state].sort((a, b) => a.name > b.name ? -1 : 1)
            }
        }
        case 'check': {
            // need to fix
            return [...state].filter( p => p.age >= 18)

        }
        default: return state
    }
}

type ActionsType = ReturnType<typeof sortPeopleAC> | ReturnType<typeof checkPeopleAC>

export const sortPeopleAC = (payload: 'up' | 'down') => ({type: 'sort', payload } as const )
export const checkPeopleAC = (payload: number) => ({type: 'check', payload} as const )