import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@components/pages/error";
import { FORM_STATE } from "@interfaces/enum";
import RootLayout from "@components/templates/root_layout";
import { HomePage } from "@components/pages/home";


interface PropType {
  component: any;
  action?: FORM_STATE;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ]
  },
]);

export { router };
