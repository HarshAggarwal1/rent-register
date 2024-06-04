let initialState = {
    profilePage: "dashboardPage",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_PROFILE_PAGE':
            return {
                ...state,
                profilePage: action.payload
            };
        default:
            return state;
    }
};

export default reducer;