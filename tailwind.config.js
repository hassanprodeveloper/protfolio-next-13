/** @type {import('tailwindcss').Config} */

const colors = {
  primary: {
    100: "#F8F1FF",
    200: "#EAD9FE",
    300: "#DEC1FF",
    400: "#9C6CEA",
    500: "#792BF8",
    600: "#5B18CA",
  },
  secondary: {
    100: "#FFE8DF",
    200: "#FDCF70",
    300: "#FFBFA8",
    400: "#FF9A76",
    500: "#F69321",
  },
  tertiary: "#0DA8BA",
  white: "#ffffff",
  gray: {
    100: "#fff",
    200: "#f5f5f5",
    300: "#F7F8FA",
    400: "#E9EAF0",
    500: "#D8DAE3",
    600: "#B8BAC3",
    700: "#888B94",
    750: "#4B5166",
    800: "#383C49",
    900: "#14192B",
  },
  success: "#7FBA7A",
  error: "#FC5A5A",
  backgroundColor: "#FFF",
  backgroundColorOne: "#F8F8F8",
  TableBorderColor: "#EFF2F7",
  transparent: "transparent",
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
  },
  plugins: [],
}
