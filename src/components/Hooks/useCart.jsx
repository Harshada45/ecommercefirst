import { useCallback } from "react";
import { toast } from "react-toastify";

const UseCart = (setCartItems, setCartCount) => {

    const addToCart = useCallback((id) => {
    if (!id) return;
    
    const storedIds = JSON.parse(localStorage.getItem("cartIds")) || [];

    if (!storedIds.includes(Number(id))) {
      storedIds.push(Number(id));
      localStorage.setItem("cartIds", JSON.stringify(storedIds));

      // update states
      setCartItems(storedIds.length);
      setCartCount(storedIds.length);

      toast.success("Product added successfully");
    } else {
      toast.info("Product already in cart");
    }
  }, [setCartItems, setCartCount]);

  return { addToCart };
};

export default UseCart;
