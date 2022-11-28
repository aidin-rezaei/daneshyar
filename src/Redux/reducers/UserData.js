import React from "react";

const initialState = {
    nationalCode: "",
    phone: "",
    token: ""
}

const UserData = (state=initialState, action) => {
    switch(action.type) {
        case "SET_USER_DATA": 
            return{
                nationalCode: action.value.nationalCode,
                phone: action.value.phone,
                token: action.value.token
            }
        default:
            return state;
    }
}

export default UserData;