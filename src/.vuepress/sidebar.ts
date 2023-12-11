import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/csharp/": [
    {
      text: "",
      children: ["basic/", "basic2/", "oop/"],
    },
  ],
  "/csharp/basic": [
    {
      text: "",
      children: [
        "lesson1",
        "lesson2",
        "lesson3",
        "lesson4",
        "lesson5",
        "lesson6"
      ],
    },
  ],
  "/csharp/basic2": [
    {
      text: "",
      children: [],
    },
  ],
  "/csharp/oop": [
    {
      text: "",
      children: [],
    },
  ],
  "/database/": [
    {
      text: "",
      children: [],
    },
  ],
  
  "/backend/": [
    {
      text: "",
      children: [
        "lesson1",
        "lesson1p",
        "lesson2",
        "javafx/",
        "lesson4"
      ],
    },
  ],
  "/backend/javafx/": [
    {
      text: "",
      children: [
        "lesson3",
        "lesson3s",
        "lesson3e",
        //"lesson3b",
        //"lesson3dp"
      ],
    },
  ],
});
