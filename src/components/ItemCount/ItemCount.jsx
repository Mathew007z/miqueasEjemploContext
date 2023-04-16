import "./itemcount.css";
import { useState } from "react";


const ItemCount = ({ cantidad, onAdd }) => {
  const [contador, setContador] = useState(1);

  const buttonAument = () => {
    setContador(contador + 1);
  };

  const buttonDecrement = () => {
    contador > 0 ? setContador(contador - 1) : setContador(0);
  };

  const agregarProducto = () => {
    onAdd(contador)
  }
  console.log(agregarProducto)
  return (
    <>
      <div className="count-contain">
        <button onClick={buttonDecrement} className="buttonHand2">-</button>
        <button onClick={buttonAument} className="buttonHand2">+</button>
        <p className="count-time">Cantidad : {contador}</p>
      </div>
      <button className="buttonCount" onClick={agregarProducto}>
        Añadir al carrito
      </button>
    </>
  );
};

export default ItemCount;
