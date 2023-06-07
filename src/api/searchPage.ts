import { req } from "./https";

const searchPage = {
    apiGetSearchPageData(searchTag:string){
        // console.log('searchTag: ', searchTag)
        const qstring = "/home/search?q=" + searchTag
        return req("get", qstring , null)
    },

}

export default searchPage;
