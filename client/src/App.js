import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddProduct, {
  loader as addProductLoader,
} from "./components/AddProduct";
import Products from "./components/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Products />} />
      <Route
        path="/addproduct"
        element={<AddProduct />}
        loader={addProductLoader}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
