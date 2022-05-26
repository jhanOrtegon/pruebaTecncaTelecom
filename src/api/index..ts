import { dataLogin } from "./dataLogin"

export const getUserLogin = (email: string, password: string) => {

    const user = dataLogin.find(x => x.email === email && x.password === password)
    return user ? true : false

}