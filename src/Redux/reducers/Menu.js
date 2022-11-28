

const Menu = (state=false, action) => {
    switch(action.type) {
        case "TOGGLE_SIDEBAR_MENU":
            return !state;
        default:
            return state;
    }
}

export default Menu;