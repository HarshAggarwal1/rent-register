let initialState = {
    detailsMenu: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DETAILS_MENU':
            return {
                ...state,
                detailsMenu: action.payload
            };
        default:
            return state;
    }
};

export default reducer;