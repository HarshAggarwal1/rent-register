let initialState = {
    menu: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MENU':
            return {
                ...state,
                menu: !state.menu
            };
        default:
            return state;
    }
};

export default reducer;