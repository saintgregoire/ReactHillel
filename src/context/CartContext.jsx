import { useReducer, createContext, useCallback, useMemo } from "react";

export const CartContext = createContext(null);
CartContext.displayName = "CartContext";

const initialState = {
  items: [],
  cartItems: [],
};

const CartContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INIT":
        return {
          ...state,
          items: action.payload,
        };
      case "ADD":
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...action.payload, qty: 1, price: action.payload.unitPrice },
          ],
        };
      case "CLEAR":
        return initialState;
      case "INCREMENT":
        return {
          ...state,
          cartItems: state.cartItems.map((i) => {
            if (i.id !== action.payload) return i;
            return {
              ...i,
              qty: i.qty + 1,
              price: i.price + i.unitPrice,
            };
          }),
        };
      case "DECREMENT": {
        const existingItem = state.cartItems.find(
          (i) => i.id === action.payload
        );

        if (existingItem.qty >= 2) {
          return {
            ...state,
            cartItems: state.cartItems.map((i) => {
              if (i.id !== action.payload) return i;
              return {
                ...i,
                qty: i.qty - 1,
                price: i.price - i.unitPrice,
              };
            }),
          };
        } else {
          return {
            ...state,
            cartItems: state.cartItems.filter((i) => i.id !== action.payload),
          };
        }
      }
      case "DELETE":
        return {
          ...state,
          cartItems: state.cartItems.filter((i) => i.id !== action.payload),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInitData = useCallback((items) => {
    dispatch({
      type: "INIT",
      payload: items,
    });
  }, []);

  const handleAddToCart = useCallback((item) => {
    dispatch({
      type: "ADD",
      payload: item,
    });
  }, []);

  const handleClearCart = useCallback(() => {
    dispatch({
      type: "CLEAR",
    });
  }, []);

  const handleIncrement = useCallback((id) => {
    dispatch({
      type: "INCREMENT",
      payload: id,
    });
  }, []);

  const handleDecrement = useCallback((id) => {
    dispatch({
      type: "DECREMENT",
      payload: id,
    });
  }, []);

  const handleDelete = useCallback((id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }, []);

  const value = useMemo(
    () => ({
      cartItems: state,
      onInit: handleInitData,
      onAdd: handleAddToCart,
      onClear: handleClearCart,
      onIncrement: handleIncrement,
      onDecrement: handleDecrement,
      onDelete: handleDelete,
    }),
    [
      handleAddToCart,
      handleIncrement,
      state,
      handleClearCart,
      handleDecrement,
      handleDelete,
      handleInitData,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
