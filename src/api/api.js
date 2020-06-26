import * as axios from "axios";


const instance = axios.create({
    baseURL : 'https://social-network.samuraijs.com/api/1.0/' ,
    withCredentials: true

})

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const ProfileAPI = {
    getUserProfile(userID) {
        return instance.get('profile/' + userID)
            .then(response => {
                return response.data
            })
    }
}

export const AuthAPI = {
    getAuth(){
        return instance.get()
            .then(response => {
                return response.data
            })
    }
}
