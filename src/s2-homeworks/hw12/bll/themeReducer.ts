type ChangeThemeId = {
    type: 'SET_THEME_ID'
    id: number
}
type InitState = {
    themeId: number
}

const initState: InitState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeId): InitState => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeId => ({ type: 'SET_THEME_ID', id } as const) // fix any