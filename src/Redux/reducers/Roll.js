import React from "react";

const Roll = (state="", action) => {
    switch(action.type) {
        case "GET_ROLL":
            return(action.value);
        default:
            return(state);
    }
}
export default Roll;