/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2023-12-24 23:06:59
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2024-01-01 16:44:55
 * @FilePath: /studyEnglish/src/.vuepress/sidebar/en.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Article",
      icon: "laptop-code",
      prefix: "article/",
      link: "article/",
      children: "structure",
    },
    {
      text: "listening",
      icon: "laptop-code",
      prefix: "listeningMaterials/",
      link: "listeningMaterials/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    },
  ],
});
