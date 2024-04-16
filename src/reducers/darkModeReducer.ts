// eslint-disable-next-line @typescript-eslint/no-explicit-any
const darkModeReducer = (state: any, action: any) => {
    switch(action.type) {
        case "DARK": {
            return{
                ...state,
                darkMode: true
            }
        }
        case "LIGHT": {
            return{
                ...state,
                darkMode: false
            }
        }
        case "TOGGLE": {
            return{
                ...state,
                darkMode: !state.darkMode
            }
        }
        default:
            return state
    }
}
export default darkModeReducer
