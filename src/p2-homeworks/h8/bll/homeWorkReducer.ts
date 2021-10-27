import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            }  else  {
                return [...state].sort((a, b) => a.name > b.name ? -1 : 1)
            }
           /* const newState = [...state].sort( (a,b)=> {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return  -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()*/
        }
        case 'check': {
            return [...state].filter( p => p.age >= 18)

        }
        default: return state
    }
}

type ActionsType = ReturnType<typeof sortPeopleAC> | ReturnType<typeof checkPeopleAC>

export const sortPeopleAC = (payload: 'up' | 'down') => ({type: 'sort', payload } as const )
export const checkPeopleAC = (payload: number) => ({type: 'check', payload} as const )