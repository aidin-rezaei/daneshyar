
const initialState = {
    email
        :
        "aidin@gmail.com",
    phone
        :
        "09038007960",
    studentNumber
        :
        "0000000000000",
    supervisor
        :
        "0",
    username
        :
        "آیدین رضایی"
}

const UserData = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                email: action.value.email,
                phone: action.value.phone,
                studentNumber: action.value.studentNumber,
                supervisor: action.value.supervisor,
                username: action.value.username
            }
        default:
            return state;
    }
}

export default UserData;