import { defineStore } from "pinia";
import User from "@/api/user.js";
import type { AxiosResponse } from "axios";
import { computed, ref } from "vue";
import { useRouter } from 'vue-router'

type userData = {
  email: string;
  password: string;
};

export const useUserStore = defineStore("user", () => {
  // const userToken = ref<string>();
  const accessToken = localStorage.getItem('accessToken') || null;
  const hasLogin = accessToken ? true : false;
  const router = useRouter()

  // get user data
  async function getUserData() {
    console.log('ready')
    console.log('accessToken', accessToken);
    const result = (await User.apiGetUserData({
      token: accessToken
    })) as AxiosResponse;
    console.log('result', result);
    // console.log('result', result);
    // if (result.data && result.data.data) {
    //   const { token } = result.data.data;
    //   userToken.value = token;
    //   // localStorage 存進 accessToken
    //   localStorage.setItem('accessToken',token)

    //   return result.data;
    // } else {
    //   console.log("error.response.status=>", result);
    //   alert("帳號密碼錯誤，請重新輸入");
    //   throw new Error("Failed to authenticate. Check your login data.");
    // }
  }

  // update user data
  function updateUserData() {
    // userToken.value = "";
    // localStorage.setItem('accessToken',"")
    // router.push('/login');
    console.log('update');
  }

  return { getUserData, updateUserData, accessToken };
});