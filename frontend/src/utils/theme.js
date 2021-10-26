import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    colors: {
      neutral: {
        900: "",
        800: "",
        700: "",
        600: "#242424",
        500: "#3A3A3A",
        400: "#8B8B8B",
        300: "#BEBEBE",
        200: "#EBEBEB",
        100: "#F9F9F9",
      },
    },
    global: {
      "a, button": {
        _focus: {
          outline: "none",
        },
      },
      svg: {
        color: "#8B8B8B",
      },
    },
  },
  Input: {
    variants: {
      filled: (props) => ({
        _placeholder: {
          color: 'black.900'
        },
      }),
    }
  },
  
  // Input : {
  //   variants: {
  //     outline: (props: Dict) => ({
  //       field: {
  //         bg: mode('white', 'gray.800')(props),
  //         borderColor: 'gray.300',
  //         _placeholder: {
  //           color: 'red.500',
  //         },
  //       },
  //     }),
  //   },
  // },
});



export { theme };