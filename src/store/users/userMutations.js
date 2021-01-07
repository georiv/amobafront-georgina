export default {
    SET_USER(state, users) {
        state.users = users;
    },
    SET_MODAL(state) {
        state.open = true; 
    },
    CLOSE_MODAL(state) {
        if (state.open) {
            state.open = false;
            state.selectedUser = null
        }
    },
    UPDATE_USER(state, user){
        const index = state.users.findIndex(u => u.id === user.id);
        state.users.splice(index, 1, user);
    },
    SELECTED_USER(state, selectedUser){
        state.selectedUser = selectedUser;
    }
}