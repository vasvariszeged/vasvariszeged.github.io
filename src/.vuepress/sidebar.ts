import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/csharp/": [
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
        "lesson3b",
        "lesson3dp"
      ],
    },
  ],
});
