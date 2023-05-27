import { req } from "./https";

const homePage = {
    apiGetHomePageData(){
        return req("get", "/home" , null)
    },

}

export default homePage;