// import { toast } from "react-hot-toast";
// import './checkout.css'
// import {useState} from 'react'
// import { getFirestore, addDoc, collection } from 'firebase/firestore';
// import { useCartContext } from "../../Context/CartContext";
// import { Link } from 'react-router-dom';

//     const CheckOut = () => {
//         const [id , setId] = useState()
//         const [form, setForm] = useState({

//         name: '', 
//         email: '',
//         message: '',
//         });

        
//         const { cart,totalPrice,clearCart } = useCartContext();

//         const compra = {
//           form,
//           items:cart.map(prod => ({id : prod.id, nombre: prod.nombre, precio: prod.precio, cantidad: prod.cantidad})),
//           total: totalPrice(),
//       }

   

//       const finishClick = (e) => {
//         e.preventDefault()
//           if(form.name === '' && form.email === '') {
//               toast.error("Todos los campos son requeridos")
//             }else{
//               const db = getFirestore();
//               const userCollection = collection(db, 'compra')
//                 addDoc(userCollection, compra)
//                 .then(( res ) => {
//                   toast.success(`Su Compra ${res.id} se realizó Correctamente`, {
//                     style: {
//                       border: '1px solid #713200',
//                       padding: '16px',
//                       color: '#713200',
//                     },
//                     iconTheme: {
//                       primary: '#713200',
//                       secondary: '#FFFAEE',
//                     },
//                   });
//                   setId(res.id)
//                 clearCart();
//                  })   
              
//             }
//       }

//         // Hago copia del form
//         const changeHandler = (ev) => {
//             const {value, name} = ev.target;
//             setForm({...form, [name]:value})
//         }





//         return (
//             <div className="div-full">
//             {typeof id !== 'undefined' ? (
//               <div className="message-dad">
//                 <p className="message">Su mensaje se ha enviado correctamente!</p>
//                 <Link to='/productos'><button className="button-message">Volver a Comprar</button></Link>
//               </div>
//             ) : (
//                 // Envio los datos del formulario que ya estan en el estado.
           
//               <form onSubmit={finishClick} className='form'>
//                 <div>
//                     <h2 className="title-compra">Formulario de Compra</h2>
//                   <label htmlFor="name" className="label-1">Nombre: </label>
//                   <input
//                     name="name"
//                     id="name"
//                     value={form.name}
//                     // Con el change me llevo el valor del input a un estado.
//                     onChange={changeHandler}
//                     className='input-duo'
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="label-1" >Email: </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={form.email}
//                     onChange={changeHandler}
//                     className='input-duo input-duo-2'
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="label-1">Mensaje: </label>
//                   <textarea
//                     name="message"
//                     id="message"
//                     value={form.message}
//                     onChange={changeHandler}
//                     className='input-duo'
//                   ></textarea>
//                 </div>
//                 <button className="submit-button">Enviar</button>
//               </form>
//             )}
//           </div>
//         )
// }


// export default CheckOut;