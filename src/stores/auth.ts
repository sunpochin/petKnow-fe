import { defineStore } from "pinia";
import Auth from "@/api/auth.js";
import type { AxiosResponse } from "axios";
import { computed, ref } from "vue";

type loginData = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth", () => {
  const userToken = ref<string>();
  const accessToken = computed(() => userToken.value );

  // 登入
  async function login(loginData: loginData) {
    const { email, password } = loginData;
    const result = (await Auth.apiPostLogin({
      email: email.trim(),
      password,
    })) as AxiosResponse;
    if (result.data) {
      const { accessToken } = result.data;

    userToken.value = accessToken;
 
      return result.data;
    } else {
      console.log("error.response.status=>", result);
      alert("帳號密碼錯誤，請重新輸入");
      throw new Error("Failed to authenticate. Check your login data.");
    }
  }

  function logout() {
    console.log("logout")
  }

  return { login, logout, accessToken };
});