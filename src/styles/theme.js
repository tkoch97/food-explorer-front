import { css } from 'styled-components';

export default {
  COLORS: {
    LIGHT_100: "#FFFFFF",
    LIGHT_200: "#FFFAF1",
    LIGHT_300: "#E1E1E6",
    LIGHT_400: "#C4C4CC",
    LIGHT_500: "#7C7C8A",
    LIGHT_600: "#76797B",
    LIGHT_700: "#4D585E",

    DARK_100: "#000405",
    DARK_200: "#00070A",
    DARK_300: "#000204",
    DARK_400: "#000A0F",
    DARK_500: "#000C12",
    DARK_600: "#00111A",
    DARK_700: "#001119",
    DARK_800: "#0D161B",
    DARK_900: "#0D1D25",
    DARK_1000: "#192227",

    GRADIENTS_100: "linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%)",
    GRADIENTS_200: "linear-gradient(180deg, #091E26 0%, #00131C 100%)",

    TOMATO_100: "#750310",
    TOMATO_200: "#92000E",
    TOMATO_300: "#AB222E",
    TOMATO_400: "#AB4D55",

    CARROT_100: "#FBA94C",

    MINT_100: "#04D361",

    CAKE_100: "#82F3FF",
    CAKE_200: "#065E7C",
  }
}

// Para evitar repetição de código, criar um utilitário de função para gerar um estilo de fonte padrão e receber modificações pontuais.
const generateFontStyle = (options) => css`
  font-family: ${options.family || 'Poppins'};
  font-weight: ${options.weight || 500 /*medium weight*/};
  font-size: ${options.size || '1.4rem'};
  line-height: ${options.lineHeight || '140%'};
  letter-spacing: ${options.letterSpacing || '0%'};
  text-decoration: none;
`;

const fontStyles = {

  // Poppins:
  POPPINS_300_REGULAR: generateFontStyle({
    weight: 300,
    size: '2.4rem',
  }),

  POPPINS_100_MEDIUM: generateFontStyle({
    size: '1.4rem',
    lineHeight: '2.4rem',
  }),

  POPPINS_200_MEDIUM: generateFontStyle({
    size: '2.0rem',
    lineHeight: '160%'
  }),
  
  POPPINS_400_MEDIUM: generateFontStyle({
    size: '3.2rem',
  }),
  
  POPPINS_500_MEDIUM: generateFontStyle({
    size: '4.0rem',
  }),
  
  POPPINS_300_BOLD: generateFontStyle({
    weight: 700,
    size: '2.4rem',
  }),
  
  // Roboto:
  ROBOTO_SMALLEST_REGULAR: generateFontStyle({
    family: 'Roboto',
    weight: 300,
    size: '1.2rem',
    lineHeight: '160%'
  }),

  ROBOTO_SMALLER_REGULAR: generateFontStyle({
    family: 'Roboto',
    weight: 300,
    size: '1.4rem',
    lineHeight: '160%'
  }),

  ROBOTO_SMALLER_BOLD: generateFontStyle({
    family: 'Roboto',
    weight: 700,
    size: '1.4rem',
    lineHeight: '160%'
  }),

  ROBOTO_SMALL_SPACED: generateFontStyle({
    family: 'Roboto',
    weight: 300,
    size: '1.6rem',
    lineHeight: '160%'
  }),

  ROBOTO_SMALL_REGULAR: generateFontStyle({
    family: 'Roboto',
    weight: 300,
    size: '1.6rem',
    lineHeight: '100%'
  }),

  ROBOTO_BIG_BOLD: generateFontStyle({
    family: 'Roboto',
    weight: 700,
    size: '2.0rem',
    lineHeight: '160%'
  }),

  ROBOTO_BIGGER_BOLD: generateFontStyle({
    family: 'Roboto',
    weight: 700,
    size: '2.4rem',
    lineHeight: 'normal'
  }),

  ROBOTO_BIGGEST_REGULAR: generateFontStyle({
    family: 'Roboto',
    weight: 300,
    size: '3.2rem',
    lineHeight: '160%'
  }),

  ROBOTO_GIANT_BOLD: generateFontStyle({
    family: 'Roboto',
    weight: 700,
    size: '4.2rem',
    lineHeight: 'normal'
  }),

};

// Criar função para aplicar um padrão de estilo de fonte, será aplicado no CSS do componente usando as props.
export const applyFontStyle = (fontApplied) => {
  return fontStyles[fontApplied];
};