// tailwind.config.js;
import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */ export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@heroui/theme/dist/components/(button|card|tabs|ripple|spinner).js",
];
export const theme = {
  extend: {
    colors: {
      primary: "#2F855A", //Основной цвет для кнопки, активная навигация, логотип, иконки
      secondary: "#68D391", //навигации, при навидание на иконки, ссылки, подробнее
      background: "#F9FAFB", //карта туров, гидов
      accent: "#F39016", //скидки, объявлении
      dark_text: "#2D3748", //dark_text
      light_text: "#F9FAFB", //light_text
      success: "#38A169", //успешно
      error: "#E53E3E", //ощибка
    },
  },
};
export const darkMode = "class";
export const plugins = [
  heroui({
    themes: {
      colors: {
        primary: "#2F855A", //Основной цвет для кнопки, активная навигация, логотип, иконки
        secondary: "#68D391", //навигации, при навидание на иконки, ссылки, подробнее
        background: "#F9FAFB", //карта туров, гидов
        accent: "#F39016", //скидки, объявлении
        primary_text: "#2D3748", //основной текст
        success: "#38A169", //успешно
        error: "#E53E3E", //ощибка
      },
    },
  }),
];
