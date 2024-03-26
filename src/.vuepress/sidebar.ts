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
        "lesson6",
        "lesson7"
      ],
    },
  ],
  "/csharp/basic2": [
    {
      text: "",
      children: [
        "lesson1",
        "lesson2",
        "lesson3",
        "lesson4",
        "lesson5",
        "lesson6",
        "lesson7",
        "lesson8",
        "lesson9"
      ],
    },
  ],
  "/csharp/oop": [
    {
      text: "",
      children: [
        "lesson1",
        "lesson2",
        "lesson3",
        "lesson4",
        "lesson5",
        "lesson6",
        "lesson7",
        "lesson8",
        "lesson9"
      ],
    },
  ],
  "/database/": [
    {
      text: "",
      children: [
        "lesson1",
        "lesson2",
        "lesson3",
        "lesson4"
      ],
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
        "springboot/"
      ],
    },
  ],
  "/backend/javafx/": [
    {
      text: "",
      children: [
        "lesson3",
        "lesson3s",
        "lesson3e"
      ],
    },
  ],
  "/backend/springboot/": [
    {
      text: "",
      children: [
        "lesson4a",
        "lesson4b",
        "lesson4c",
        "lesson4d",
        "lesson4e",
        "lesson4f"
      ],
    },
  ],
});