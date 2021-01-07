import axios from 'axios'

export default {
    getUsers({ commit }, key) {
        return new Promise((resolve, reject) => {
            let url = `/api/user/index`

            if(key){
                url = `${url}?filter[First_name]=${key}`
            }
            axios.get(url).then((response) => {
                commit("SET_USER", response.data.users.data);
                resolve(response.data.users.data)
            }).catch((error) => {
                reject(error)
            });
        })
    },

    Modal({ commit }) {
        commit("SET_MODAL");
    },

    closeModal({ commit }) {
        commit("CLOSE_MODAL")
    },

    save({ }, value) {
        return new Promise((resolve, reject) => {
            let url = "/api/user/create"
            axios.post(url, value).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            });
        })
    },

    upload({ }, image) {
        return new Promise((resolve, reject) => {
            let body = new FormData();
            body.append('image', image);
            let url = "/api/upload"
            axios.post(url, body).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error)
            });
        })
    },

    deleteUser({commit}, id){
        return new Promise((resolve, reject)=>{
            let url = "/api/user/delete/" + id

            axios.put(url).then((response) => {
                resolve()
            }).catch((error) => {
                reject(error)
            });
        });
    }
}

