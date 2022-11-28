

const Filter = (state=false, action) => {
    switch(action.type) {
        case "TOGGLE_SIDEBAR_FILTER":
            return !state;
        case "CLOSE":
            return false;
        default: 
            return state;
    }
};

export default Filter;