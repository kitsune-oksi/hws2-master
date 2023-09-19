
type ActionType = ReturnType<typeof loadingAC>
export type LoadingType = typeof initState

const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionType): LoadingType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})