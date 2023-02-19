
const initialState = {
    email
        :
        "123n@123.123",
    phone
        :
        "09038007960",
    id
        :
        "0",
    username
        :
        "آیدین رضایی"
}

const AdminData = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ADMIN_DATA":
            return {
                email: action.value.email,
                phone: action.value.phone,
                id: action.value.id,
                username: action.value.username
            }
        default:
            return state;
    }
}

export default AdminData;