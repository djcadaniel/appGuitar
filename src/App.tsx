import { Header } from "./components"
import Guitar from "./components/Guitar";
import { useCar } from "./hooks/useCar"
import './App.css'

function App() {
  const { data, car, addToCart, removeCar, decrementCar, increaseQuantity, clearCar, isEmpty, carTotal, showCart, handleCartClick, refCar} = useCar();


  return (
    <div>
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

    <main className="container-xl mt-5 container_grid">
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
    </main>
    
    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </div>
  )
}

export default App
