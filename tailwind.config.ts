import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
export const Hobbies = [
  {
    name: "Bermain Bola",
    description: "Bermain Bola adalah hobi yang pertama saya untuk menghilangkan stress.",
    image: "../Mainbola.jpeg",
  },
  {
    name: "Badminton",
    description: "Badminton hobby saya ke dua karena suka aja sihh",
    image: "../Bulutangkis.jpeg",
  },
  {
    name: "Main Game",
    description: "Gaming adalah hobby ke tiga saya untuk sekedar Gabut.",
    image: "../BermainGame.jpeg",
  },
  {
    name: "Swimming",
    description: "Hobby saya ke empat berenang kalo lagi pengen aja sihh.",
    image: "../Berenang.jpeg",
  },
];
