import { useEffect, useMemo, useRef, useState } from "react";
import {db} from '../data/db';
import type { Guitar, CarItem, GuitarID, CartRef } from '../types';

export const useCar = () => {
  const initialCar = () : CarItem[] =>{
    const localStorageCar = localStorage.getItem('car')
    return localStorageCar ? JSON.parse(localStorageCar) : []
  }

  const [data] = useState(db)
  const [car, setCar] = useState(initialCar)
  const [showCart, setShowCart] = useState(false);
  
//   const menuRef = useRef<CartRef>();

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
      localStorage.setItem('car', JSON.stringify(car))
      document.addEventListener('click', handleClickOutside)
  }, [car])

  const handleCartClick = ()=>{
    setShowCart(!showCart)
  }

  const refCar = useRef<CartRef>(null);
  
  const handleClickOutside = (e: Event) => {
    if(!refCar.current || e.target === null){
        return;
    }

    if(!refCar.current.contains(e.target as Node)){
        console.log('outside')
        setShowCart(false)
        console.log(showCart)
    }
}

  function addToCart(item: Guitar){

      const itemExists = car.findIndex((guitar) => guitar.id === item.id)
      if(itemExists >=0){
          if(car[itemExists].quantity === MAX_ITEMS) return;
          const updatedCart = [...car];
          updatedCart[itemExists].quantity++;
          setCar(updatedCart)
          console.log('existe')
      }else{
          const newItem : CarItem = {...item, quantity: 1}
          setCar([...car, newItem])
      }
      // !car.includes(item) && setCar([...car, item])
  }

  function removeCar(id: GuitarID){
      console.log('eliminando')
      setCar( car.filter(item => item.id !== id))
  }

  function increaseQuantity(id: GuitarID){
      const updatedCart = car.map(guitar => {
          if(guitar.id === id && guitar.quantity < MAX_ITEMS){
              return{
                  ...guitar,
                  quantity: guitar.quantity + 1
              }
          }
          return guitar
      })
      setCar(updatedCart)
  }


  function decrementCar(id: GuitarID){
      const updatedCart = car.map( guitar => {
          if(guitar.id === id && guitar.quantity > MIN_ITEMS ){
              return {
                  ...guitar,
                  quantity : guitar.quantity - 1
              }
          }else{
              return guitar
          }
      })
      
      setCar(updatedCart)
  }

  function clearCar(){
      setCar([])
  }

  const isEmpty = useMemo(() => car.length === 0, [car]);
  const carTotal = useMemo(() => car.reduce((total, item) => total + (item.quantity * item.price), 0), [car])

  return {
    data,
    car,
    addToCart,
    removeCar,
    decrementCar,
    increaseQuantity,
    clearCar,
    isEmpty,
    carTotal,
    handleCartClick,
    showCart,
    refCar
  }
}