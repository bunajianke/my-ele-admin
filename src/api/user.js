import { get, post } from '@/utils/request'

export function login(info) {
    return post("/login", info);
}

export function getUserInfo() {
    return post("/user/info2", {})
}

export function logout() {

}