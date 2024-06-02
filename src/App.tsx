import CssBaseline from '@mui/material/CssBaseline'
import { ConfirmProvider } from 'material-ui-confirm'
import { ToastContainer } from "react-toastify";
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        // default: deepOrange[800],
        // paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
          primary: grey[900],
          secondary: grey[800],
        }
        : {
          primary: '#fff',
          secondary: grey[500],
        }),
    },
    //icon
    // action: {
    //   active: mode === 'light' ? grey[900] : '#fff',
    // },

  },
});



function App() {
  const darkModeTheme = createTheme(getDesignTokens('dark'));
  return (
    <>
      <ThemeProvider theme={darkModeTheme}><CssBaseline />
        <ConfirmProvider>
          <RouterProvider router={router} />
        </ConfirmProvider>
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}

export default App
