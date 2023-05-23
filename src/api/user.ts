import { req } from "./https";

interface accessToken {
  token: any
}

/*
  e.g. 
  { 
    "name": "patrick",
    "bio": "Just another software developer",
    "nickname": "pat" 
  }
*/

interface updateData {
  name: String,
  nickname: String,
  bio: String
}


const user = {
    apiGetUserData(token: accessToken){
        return req("get", "/user/show" , token)
    },
    apiUpdateUserData(data: updateData){
        return req("put", "/user/update" , data)
    }
}

export default user;