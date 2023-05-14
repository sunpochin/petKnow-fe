import { req } from "./https";
interface loginData{
    email: string;
    password: string;
}
const login = {
    apiPostLogin(data:loginData){
        return req("post","/login",data)
    }
}

export default login;