/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-12-24 23:06:59
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2023-12-27 22:49:52
 * @FilePath: /studyEnglish/src/.vuepress/config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Study English"
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
