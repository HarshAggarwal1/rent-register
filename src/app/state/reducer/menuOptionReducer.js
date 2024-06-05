let initialState = {
    tab: "tenants"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MENU':
            return {
                ...state,
                tab: action.payload
            };
        default:
            return state;
    }
}

export default reducer;