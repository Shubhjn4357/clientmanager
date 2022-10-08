
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { lightBlue,grey,deepPurple } from '@mui/material/colors';
import {useMemo,useState,createContext} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RouterModule from "./RouterModule";
function App() {
const [mode, setMode] = useState('light');
const ColorModeContext=createContext();
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: lightBlue,
          divider: lightBlue[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepPurple,
          divider: deepPurple[700],
          background: {
            default: deepPurple[900],
            paper: deepPurple[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

//Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
     <div className="App">
      <RouterModule/>
    </div>
   </ThemeProvider>
   </ColorModeContext.Provider>
    
  );
}

export default App;
