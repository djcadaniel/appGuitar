import { db } from "../data/db"
import { CarItem, Guitar } from "../types"
import { FaRegSadCry } from "react-icons/fa";

type HeaderProps = {
    car: CarItem[]
    removeCar: (id: Guitar['id']) => void
    increaseQuantity: (id: Guitar['id']) => void
    decrementCar: (id: Guitar['id']) => void
    clearCar: () => void
    isEmpty: boolean
    carTotal: number
    addToCart: (item: Guitar) => void
    showCart: boolean
    handleCartClick: any
    refCar: any
}



export const Header = ({
    car, 
    removeCar, 
    increaseQuantity, 
    decrementCar, 
    clearCar, 
    isEmpty, 
    carTotal,
    addToCart,
    handleCartClick,
    showCart,
    refCar
} : HeaderProps) => {

  return (
    <header className=" header">
        <div className="container-xl contain ">
            <div className="header_contain">
                <div className="header_menu">
                    <div className="header_logo">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.png" alt="imagen logo" />
                        </a>
                    </div>
                    <div ref={refCar}>
                        <button onClick={()=>handleCartClick(true)} className="icoCarrito">
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
                        </button>
                        <nav className={ `${showCart ? 'mostrarCarrito' : 'hideCarrito'}`}>
                        <div id="carrito" className="bg-white p-3">
                                {
                                    isEmpty ? (
                                    <p className="text-center vacio">El carrito está vacío <FaRegSadCry /></p>
                                    ) : (
                                    <>
                                        <table className="w-100 table">
                                            <thead>
                                                <tr>
                                                    <th>Imagen</th>
                                                    <th>Nombre</th>
                                                    <th>Precio</th>
                                                    <th>Cantidad</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                car.map(guitar => (
                                                <tr key={guitar.id}>
                                                    <td>
                                                        <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                    </td>
                                                    <td>{guitar.name}</td>
                                                    <td className="fw-bold">
                                                        {guitar.price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={()=> decrementCar(guitar.id)}
                                                        >
                                                            -
                                                        </button>
                                                            {guitar.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={()=>increaseQuantity(guitar.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={()=>removeCar(guitar.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                        <p className="text-end">Total pagar: <span className="fw-bold">S/. {carTotal}</span></p>
                                    </>
                                    )
                                }
                                    <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCar}>Vaciar Carrito</button>
                        </div>
                        </nav>

                    </div>
                </div>
                <div className="header_offer">
                    <div className="header_ofer--text">
                        <div className="header-description">
                            <p>{db[1]?.name}</p>
                            <p>{db[1]?.description}</p>
                            <p>{`S/. ${db[1]?.price} `}</p>
                            <div className="container-button">
                                <button 
                                    type="button"
                                    className="btn btn-offer w-100"
                                    onClick={()=> addToCart(db[1])}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </header>
  )
}