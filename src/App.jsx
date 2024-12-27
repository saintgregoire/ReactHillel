import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router";
import CartWidget from "./components/CartVidget/CartWidget";
import { lazy, Suspense } from "react";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const MenuLazy = lazy(() => import("./pages/Menu/Menu"));
const CartLazy = lazy(() => import("./pages/Cart/Cart"));
const OrderFormLazy = lazy(() => import("./pages/OrderForm/OrderForm"));
const OrderStatusLazy = lazy(() => import("./pages/OrderStatus/OrderStatus"));

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <HomeLazy />
            </Suspense>
          }
        />
        <Route
          path="/menu"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <MenuLazy />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <CartLazy />
            </Suspense>
          }
        />
        <Route
          path="/order_form"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <OrderFormLazy />
            </Suspense>
          }
        />
        <Route
          path="/orders/:id"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <OrderStatusLazy />
            </Suspense>
          }
        />
      </Routes>
      <CartWidget />
    </div>
  );
}

export default App;
