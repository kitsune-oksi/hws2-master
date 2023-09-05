const initState: InitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id } as const) // fix any

type ChangeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}

type InitStateType = {
    themeId: number
}