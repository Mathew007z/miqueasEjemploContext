
import './cart.css'
// implementar context
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';


const Cart = () => {
    const {cart , removeProduct, totalPrice,vaciarCarrito,eliminarPorUnidad } = useCartContext();
    



return (
    <>
    <div className='cart2'>
    {
    cart.length === 0 ?
    <h1>Carrito vacio</h1>
    :
    <div className='cart-map'>
    {
    cart.map((prod , indice) =>
    <div className='detail-cont' key={indice}>
    <div className='cardCarrito'>
    <div className='descriptionArticle'>
    <h3 className='name-cart'>{prod.nombre}</h3>
    <img src={prod.imagen} alt={prod.imagen} className='card-img'/>
    <p className='precio-cart'>Precio: {prod.precio} x Unidad</p>
    <p className='precio-cart'>Cantidad : {prod.cantidad}</p>
    <div className='buttonDecrease'>     
                                        {/*lo que hace el disable es no dejar que la cantidad sea negativan  */}
                                         {/* Usamos el operardor AND && que si el producto es == 0 se ejecuta
                                         la funcion removeProduct y te saca el producto del carrito. */}
    <button className='decrease' disabled={prod.cantidad <= 0 && removeProduct(prod.id)} onClick={() => eliminarPorUnidad(prod.id)}> - </button>
    <button onClick={() => removeProduct(prod.id)} className="button-cart">Eliminar Todo</button>
    </div>
    </div>
    </div>
    </div>
    )}
    </div>
    }
    </div>
    <div className='cont-vacio'>
    <p className='precio-cart-24'>Total: ${totalPrice()}</p>
        <button onClick={vaciarCarrito} className='button-cart button-cart-24 button-cart button-cart-24-n1'>Vaciar Carrito</button>
    </div>
    </>
)
}




export default Cart;