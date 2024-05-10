import { Header } from "./components"
import Guitar from "./components/Guitar";
import { useCar } from "./hooks/useCar"
import './App.css'
import { FaRegSadCry } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";

function App() {
  const { data, car, addToCart, removeCar, decrementCar, increaseQuantity, clearCar, isEmpty, carTotal, showCart, handleCartClick, refCar} = useCar();

  return (
    <>
      <div className="root_contain">
        <div className="contain_group">
          <div ref={refCar} className="container_car">
            <button onClick={()=>handleCartClick()} className="icoCarrito">
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
                                            {/* <th>Imagen</th> */}
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        car.map(guitar => (
                                        <tr key={guitar.id} className="linea">
                                            {/* <td>
                                                <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                            </td> */}
                                            <td>{guitar.name}</td>
                                            <td className="fw-bold">
                                                {guitar.price}
                                            </td>
                                            <td className="controls">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark btnCalculate"
                                                    onClick={()=> decrementCar(guitar.id)}
                                                >
                                                    -
                                                </button>
                                                <div className="">
                                                    {guitar.quantity}
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-dark btnCalculate"
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
                            <button className="btn btn-dark w-100 mt-3 p-2 vaciar" onClick={clearCar}>Vaciar Carrito</button>
                </div>
            </nav>
          </div>
          <div className="container_father">
            <Header
              addToCart = {addToCart} 
            />
          </div>
          <main className=" mt-5 container_grid">
            <div className="container-xl">
              <h2 className="text-center title-colection">Nuestra Colección</h2>
              <div className="contain_grid">
                  {data. map((guitar)=> (
                    <Guitar  
                        key = { guitar.id }
                        guitar = { guitar }
                        addToCart = {addToCart}
                    />
                    ))}
              </div>

            </div>
          </main>
          <footer className="footer">
            <div className="footer_logo">
              <a href="index.html">
                  <img className="img-fluid" src="/img/logo.png" alt="imagen logo" />
              </a>
            </div>
            <div className="footer-text">
              <p>Made in React and TypeSctipt - API</p>
              <small><a href="https://danielcastro.netlify.app/" target="_blank"><FaHandPointRight style={{fontSize: '2rem'}}/> @djcadanieldev</a></small>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
