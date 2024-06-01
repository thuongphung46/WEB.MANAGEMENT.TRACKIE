import CssBaseline from '@mui/material/CssBaseline'
import { ConfirmProvider } from 'material-ui-confirm'
import { ToastContainer } from "react-toastify";
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {

  return (
    <>
      <CssBaseline />
      <ConfirmProvider>
        <RouterProvider router={router} />
      </ConfirmProvider>
      <ToastContainer />
    </>
  )
}

export default App
