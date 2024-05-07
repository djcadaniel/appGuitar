import { StarRating } from '../StarRating';
import type { Guitar } from '../types';

type GuitarProps = {
  guitar: Guitar,
  addToCart: (item: Guitar) => void
}

export default function Guitar ({guitar, addToCart} : GuitarProps) {

  return (
    <div className="guitar_grid_item">
        <div className="grid_container_img">
            <img className="" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
        </div>
        <div className="grid_container_description">
            <h3 className="text-black fs-4 fw-bold text-uppercase item_name">{guitar.name}</h3>
            <div className='block_star'>
              {
                <StarRating 
                  maxStar={5}
                  selectedStars={guitar.point} 
                />
              }
            </div>
            <p className='description_guitar'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
            <p className="fw-black text-primary fs-3 guitar_price--item">S/. {guitar.price}</p>
            <button 
                type="button"
                className="btn btn-dark w-100"
                onClick={()=> addToCart(guitar)}
            >Agregar al Carrito</button>
        </div>
    </div>
  )
}