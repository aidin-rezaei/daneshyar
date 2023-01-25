
const initialState = {
    email
        :
        "aidin@gmail.com",
    phone
        :
        "09038007960",
    id
        :
        "4",
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