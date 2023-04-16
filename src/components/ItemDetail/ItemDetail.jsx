import "./itemdetail.css"
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from "../../Context/CartContext";

function ItemDetail ( { prod } ) { 

   const { addProduct } = useCartContext()
  
 
   const onAdd = (contador) => {
      addProduct(prod, contador)
   }



   return(
      <>
      <div className="detail-combo">
            <div className="detail-container">
            <div className="detail-item-cont">
               <h3 className="title-detail">{prod.nombre}</h3>
               <img className="imgF" src={prod.imagen} alt={prod.id}/>
               <p className="detail-price">${prod.precio}</p>
               {/* recibe por props la funcion del contexto. */}
                  <ItemCount prod={prod} cantidad={prod.cantidad} onAdd={onAdd}/>     
            </div>
            </div>
               <div className='button-back'>
                     <Link to="/cart"><button className='button-back-prod button-back-prod-2'> Ir  al Carrito</button></Link>
                </div>
      </div>
  
     

      </>
  

   )
   

   
}

export default ItemDetail;