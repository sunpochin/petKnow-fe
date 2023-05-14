import { defineStore } from "pinia";
import Login from "@/api/login.js";
import type { AxiosResponse } from "axios";
import { computed, ref } from "vue";

type loginData = {
  email: string;
  password: string;
};

export const useAuthStore = defineStore("auth", () => {
  const userToken = ref<string>();
  const userId = ref<string>()
  const accessToken = computed(() => userToken.value );

  // 登入
  async function login(loginData: loginData) {
    const { email, password } = loginData;
    const result = (await Login.apiPostLogin({
      email: email.trim(),
      password,
    })) as AxiosResponse;
    if (result.data) {
      const { accessToken, id } = result.data;
    //   const expires = ticksToDate(exp) as Date;
    //   Cookies.set("accessToken", accessToken, {
    //     expires,
    //     sameSite: "Lax",
    //     secure: true,
    //   });
    userToken.value = accessToken;
    userId.value = id;
    //   console.log("pinia userToken", userToken.value);

    //   Cookies.set("userId", id, {
    //     expires,
    //     sameSite: "Lax",
    //     secure: true,
    //   });
      return result.data;
    } else {
      console.log("error.response.status=>", result);
      alert("帳號密碼錯誤，請重新輸入");
      throw new Error("Failed to authenticate. Check your login data.");
    }
  }

  function logout() {
    console.log("logout")
    // Cookies.remove("userId");
    // Cookies.remove("accessToken");
  }

//   function ticksToDate(ticks: number) {
//     return Number.isInteger(ticks)
//       ? new Date(ticks / 1e4 + new Date("0001-01-01T00:00:00Z").getTime())
//       : null;
//   }

  return { login, logout, accessToken };
});