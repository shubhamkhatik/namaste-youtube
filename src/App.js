import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./utils/store.js";
import ErrorComponent from "./pages/ErrorComponents";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement:<ErrorComponent/>,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "sarchResult",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "home",
          element: <MainContainer />,
        },
        {
          path: "shorts",
          element: <MainContainer />,
        },
        {
          path: "live",
          element: <MainContainer />,
        },
        {
          path: "javascript",
          element: <MainContainer />,
        },
        {
          path: "gaming",
          element: <MainContainer />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <>
        {/* <Head /> */}
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

export default App;
