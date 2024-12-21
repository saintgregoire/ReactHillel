import { useReducer, createContext } from "react";

export const CartContext = createContext(null);
CartContext.displayName = "CartContext";

const initialState = { cartItems: [] };

const CartContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, qty: 1, price: action.payload.unitPrice }],
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
      case "DECREMENT":
        return {
          ...state,
          cartItems: state.cartItems.map((i) => {
            if (i.id !== action.payload) return i;
            return {
              ...i,
              qty: i.qty - 1,
              price: i.price - i.unitPrice,
            };
          })
          .filter((i) => i.qty > 0),
        };
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

  const handleAddToCart = (item) => {
    dispatch({
      type: "ADD",
      payload: item,
    });
  };

  const handleClearCart = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  const handleIncrement = (id) => {
    dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const handleDecrement = (id) => {
    dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const value = {
    cartItems: state,
    onAdd: handleAddToCart,
    onClear: handleClearCart,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onDelete: handleDelete
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
