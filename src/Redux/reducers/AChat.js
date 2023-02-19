
const initialState = {
    id: "0",
    username: "یونس dsf",
    studentNumber: "sdf",
    phone: "091848sdf50728",
    email: "aaaaa@sdgmail.com",
    supervisor: "0",
}

const AChat = (state = initialState, action) => {
    switch (action.type) {
        case "Admin_Chat":
            return {
                id: action.value.id,
                username: action.value.username,
                studentNumber: action.value.studentNumber,
                phone: action.value.phone,
                email: action.value.email,
                supervisor: action.value.supervisor,
            }
        default:
            return state;
    }
}

export default AChat;