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

export const toggleDetailsMenu = (toggleDetailsMenu) => {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_DETAILS_MENU',
            payload: {
                toggleDetailsMenu
            }
        });
    }
};

export const toggleProfilePage = (profilePage) => {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_PROFILE_PAGE',
            payload: {
                profilePage
            }
        });
    }
};
