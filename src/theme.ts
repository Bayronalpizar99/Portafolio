import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// ✅  Colores personalizados
const colors = {
  brand: {
    text: "#e9eef1",
    primary: "#04a56b",
    background: "#010f18",

    // 🎨 Nuevo color para "Skills"
    skills: "#4388a2",
  },
};

const theme = extendTheme({ config, colors });

export default theme;
