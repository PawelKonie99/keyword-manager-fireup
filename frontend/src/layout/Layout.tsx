import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Itheme, theme } from "../utils/theme";


const GlobalStyles = createGlobalStyle`
html,
body {
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }: { theme: Itheme }) => theme.colors.offWhite};
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');      
  font-family: 'Noto Sans JP', sans-serif;
}
`;

export const Layout = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
