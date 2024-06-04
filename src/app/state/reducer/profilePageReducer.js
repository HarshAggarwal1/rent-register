let initialState = {
    profilePage: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_PROFILE_PAGE':
            return {
                ...state,
                profilePage: !state.profilePage
            };
        default:
            return state;
    }
};

export default reducer;