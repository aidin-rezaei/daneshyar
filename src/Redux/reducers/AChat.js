
const AChat = (state="", action) => {
    switch(action.type) {
        case "Admin_Chat":
            return(action.value);
        default:
            return(state);
    }
}
export default AChat;