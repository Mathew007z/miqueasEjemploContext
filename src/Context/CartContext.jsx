import { toast } from "react-hot-toast"; 
import React from "react";
import { useState, useContext } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);




const CartProvider = ({ children }) => {
  // Estado para nuestros objetos del carrito
  // podes guardar funcion, y estados.
  const [cart, setCart] = useState([]);

  // Funciones. AgregarAlCarrito, eliminarPorUnidad, vaciarElCarrito, removerProducto, totalPrice

    // Total Price
    const totalPrice = () => {
      return cart.reduce((acc, prod) => (acc += prod.cantidad * prod.precio), 0);
    };

    // funcion para el cart widget.
    const cantidadItem = () => {
      return cart.reduce((acc, prod) => (acc += prod.cantidad), 0);
      
    };
   
    const vaciarCarrito = () => {
      setCart([]);
    }

    // funcion de remover producto.
    const removeProduct = (id) => setCart(cart.filter((prod) => prod.id !== id));

    // eliminar por unidad
    const eliminarPorUnidad = (id) =>
    setCart(
      cart.map((prod) => {
        if (prod.id === id) {
          return { ...prod, cantidad: prod.cantidad - 1 };
        } else {
          return prod;
        }
      })
    );

      // InCart
      const isInCart = (id) => (cart.find((prod) => prod.id === id) ? true : false);


      // agregar al carrito
      const addProduct = (item, cantidad) => {
        if (isInCart(item.id)) {
          setCart(
            cart.map((prod) => {
              return prod.id === item.id
                ? { ...prod, cantidad: prod.cantidad + cantidad }
                : prod;
            })
          );
        } else {
          setCart([...cart, { ...item, cantidad }]);
        }
      };
    


  

  return (
    <CartContext.Provider value={{
      // indicamos que cosas vamos a compartir en el contexto.
      cart,
      addProduct,
      removeProduct,
      eliminarPorUnidad,
      vaciarCarrito,
      cantidadItem,
      totalPrice
    }}>

      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
