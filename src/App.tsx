import CssBaseline from "@mui/material/CssBaseline";
import { ConfirmProvider } from "material-ui-confirm";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { RootState } from "@redux/store";
import HRMStorage from "./common/function";
import { KEY_VALUE } from "./constants/GlobalConstant";
import { useEffect } from "react";
import { userActions } from "./redux/slices/userSlice";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        // default: deepOrange[800],
        // paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

function App() {
  const dispatch = useAppDispatch();
  const themeLocalStorage: any = HRMStorage.get(KEY_VALUE.THEME);
  const { theme } = useAppSelector((state: RootState) => state.user);
  const themeMode: PaletteMode = theme || "light";
  const darkModeTheme = createTheme(getDesignTokens(themeMode));

  useEffect(() => {
    if (themeLocalStorage) {
      dispatch(userActions.setState({ theme: themeLocalStorage }));
    }
  }, [dispatch, themeLocalStorage]);

  return (
    <>
      <ThemeProvider theme={darkModeTheme}>
        <CssBaseline />
        <ConfirmProvider>
          <RouterProvider router={router} />
        </ConfirmProvider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
