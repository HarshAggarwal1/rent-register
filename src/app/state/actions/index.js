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

export const toggleModal = (modal) => {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_MODAL',
            payload: {
                modal
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
