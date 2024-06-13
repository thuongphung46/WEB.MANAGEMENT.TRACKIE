import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "@components/pages/error";
import { FORM_STATE } from "@interfaces/enum";
import RootLayout from "@components/templates/root_layout";
import { HomePage } from "@components/pages/home";
import { ManganPage } from "@components/pages/manga";
import { AuthorPage } from "@components/pages/author";
import { CategoryPage } from "@components/pages/category";
import { CharactorPage } from "@/components/pages/character";


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
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/manga",
        element: <ManganPage />,
      },
      {
        path: "/author",
        element: <AuthorPage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/character",
        element: <CharactorPage />,
      },
    ]
  },
]);

export { router };
