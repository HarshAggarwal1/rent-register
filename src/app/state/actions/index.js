export const toggleMenu = () => {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_MENU'
        });
    }
};

export const changeMenu = (menuValue) => {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_MENU',
            payload: {
                menuValue
            }
        });
    }
}

export const toggleModal = (modal=false, tab="tenants", page="", mode="") => {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_MODAL',
            payload: {
                modal,
                tab,
                page,
                mode
            }
        });
    }
};

export const toggleProfilePage = () => {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_PROFILE_PAGE'
        });
    }
};
