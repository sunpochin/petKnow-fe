import { req } from "./https";

const homePage = {
    apiGetHomePageData(){
        return req("get", "/home" , null)
    },
    apiGetCourseIntroData(courseId:string){
        return req("get", `/home/${courseId}` , null)
    }

}

export default homePage;