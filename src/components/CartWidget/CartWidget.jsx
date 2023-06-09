import "./cartwidget.css"
import ImgCart from "../../assets/bag.svg"
import {Link} from 'react-router-dom'
// implementar context
import { useCartContext } from "../../Context/CartContext";

function CartWidget () {

    // desestructuracion del contexto.
    const { cantidadItem } = useCartContext();

    
return (
        <div className="divImg">
            <Link to="/cart"><img src={ImgCart} alt="cart" className="cart"/></Link>
            <p className="paragraphImg">{parseInt(cantidadItem())}</p>
        </div>
)


}

export default CartWidget