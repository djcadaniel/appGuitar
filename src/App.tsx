import { Header } from "./components"
import Guitar from "./components/Guitar";
import { useCar } from "./hooks/useCar"
import './App.css'

function App() {
  const { data, car, addToCart, removeCar, decrementCar, increaseQuantity, clearCar, isEmpty, carTotal, showCart, handleCartClick, refCar} = useCar();


  return (
    <>
      <Header
        car={car}
        removeCar = {removeCar}
        increaseQuantity = {increaseQuantity}
        decrementCar = {decrementCar}
        clearCar = {clearCar}
        isEmpty = {isEmpty}
        carTotal = {carTotal}
        addToCart = {addToCart}
        showCart = {showCart}
        handleCartClick = {handleCartClick}
        refCar = {refCar}
     />

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
    <footer className="bg-dark py-5 footer">
        <div className="container-xl footer_container">
          <div className="footer_img">
            <a href="index.html">
                <img className="img-fluid" src="/img/logo.png" alt="imagen logo" />
            </a>
          </div>
          <div className="footer_description">
            <p>Made in React and TypeSctipt - API</p>
            <small><a href="https://danielcastro.netlify.app/" target="_blank">@djcadanieldev</a></small>
          </div>
        </div>
    </footer>
    </>
  )
}

export default App
