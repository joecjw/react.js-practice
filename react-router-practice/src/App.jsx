import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SectionOne from "./pages/SectionOne";
import DemoObjectDetail from "./components/DemoObjectDetail";
import DefaultLayout from "./components/layouts/DefaultLayout";
import ObjectDetailLayout from "./components/layouts/ObjectDetailLayout";
import DemoObjectOverview from "./components/DemoObjectOverview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<DefaultLayout />}
      loader={async () => {
        return null;
      }}
    >
      <Route
        index
        element={<Home />}
        loader={async () => {
          return null;
        }}
      />
      <Route
        path="about"
        element={<About />}
        loader={async () => {
          return null;
        }}
      />
      <Route
        path="sectionOne"
        element={<SectionOne />}
        loader={async () => {
          return null;
        }}
      ></Route>
      <Route
        path="DemoObject/:id"
        element={<ObjectDetailLayout />}
        loader={async () => {
          return null;
        }}
      >
        <Route
          index
          element={<DemoObjectOverview />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="detail"
          element={<DemoObjectDetail />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="review"
          element={<div>review</div>}
          loader={async () => {
            return null;
          }}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
