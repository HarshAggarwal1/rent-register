export const toggleMenu = () => {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_MENU'
        });
    }
};