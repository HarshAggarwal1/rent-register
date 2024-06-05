
let initialState = {
    modal: false,
    tab: "",
    page: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return {
                ...state,
                modal: action.payload,
                tab: action.payload,
                page: action.payload
            };
        default:
            return state;
    }
};

export default reducer;