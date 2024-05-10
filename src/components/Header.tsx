import { db } from "../data/db"
import { Guitar } from "../types"

type HeaderProps = {
    addToCart: (item: Guitar) => void
}



export const Header = ({addToCart} : HeaderProps) => {

  return (
    <header className="header">
        <div className="  ">
            <div className="header_contain">
                <div className="header_menu">
                    <div className="header_logo">
                        <a href="index.html">
                            <img className="" src="/img/logo.png" alt="imagen logo" />
                        </a>
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