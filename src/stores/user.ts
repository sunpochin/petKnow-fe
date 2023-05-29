import { defineStore } from "pinia";
import User from "@/api/user.js";
import type { AxiosResponse } from "axios";

type updateData = {
  nickname: string,
  bio: string
}

export const useUserStore = defineStore("user", () => {
  const hasLogin = localStorage.getItem('accessToken') ? true : false

  // get user data
  async function getUserData () {
    const getResult = (await User.apiGetUserData()) as AxiosResponse
    if (getResult && getResult.data && (getResult.data.message == 'Success')) {
      const userData = {
        nickname: getResult.data.data.nickname || getResult.data.data.name,
        bio: getResult.data.data.bio || '尚未填寫自我介紹' // default bio data
      }
      return userData
    } else {
      throw new Error("Failed to get user data. Please check your login state")
    }
  }
  async function updateUserData (updateData: updateData) {
    const putResult = (await User.apiUpdateUserData(updateData)) as AxiosResponse
    if (putResult && putResult.data && (putResult.data.message == 'Success')) {
      return putResult.data
    } else {
      throw new Error ('Failed to update user data. Please check your input data again')
    }
  }
  
  return { getUserData, updateUserData, hasLogin };
});