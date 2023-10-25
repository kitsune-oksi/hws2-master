import {TUser} from '../HW8'

type Action =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: TUser[], action: Action): TUser[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                let copyState = [...state];
                return copyState.sort(
                    (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
            }
            if (action.payload === 'down') {
                let copyState = [...state];
                return copyState.sort(
                    (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
            }
            return state
        }
        case 'check': {
            return state.filter(u => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}
