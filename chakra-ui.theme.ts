import { extendTheme } from "@chakra-ui/react";

const ChakraTheme = extendTheme({
  direction:"rtl",
  fonts: {
    body: "YekanBakh",
  },
  components: {
    TextArea: {
      defaultProps: {
        placeholderTextColor: "gray.500", // Change the color of the placeholder text
        placeholderFontSize: "10", // Change the color of the placeholder text
      },
      sizes: {
        md: {
          field: {
            fontSize: "12px", // Change the font size of the input
          },
        },
        base: {
          field: {
            fontSize: "12px", // Change the font size of the input
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          height: "32px",
        },
      },
      defaultProps: {
        placeholderTextColor: "gray.500", // Change the color of the placeholder text
      },
      sizes: {
        md: {
          field: {
            fontSize: "12px", // Change the font size of the input
          },
        },
      },
    },
    Select: {
      baseStyle: {
        field: {
          height: "32px",
        },
      },
      defaultProps: {
        placeholderTextColor: "gray.500", // Change the color of the placeholder text
        placeholderFontSize: "10", // Change the color of the placeholder text
      },
      sizes: {
        md: {
          field: {
            fontSize: "12px", // Change the font size of the input
          },
        },
      },
    },
    
  },
});

export default ChakraTheme;
