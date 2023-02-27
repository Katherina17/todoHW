const initState: themeStateType = {
    themeId: 1,
}

export type themeStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeId): themeStateType => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

type changeThemeId = ReturnType<typeof changeThemeId>

