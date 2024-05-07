import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export const StarRating = ({maxStar, selectedStars} : any) => {
  return (
    <div className="container_rating">
      {
        [... Array(maxStar)].map((item, index)=>(
          <div key={index}>
            {
              index < selectedStars ? <FaStar className="startScore"/> : <FaRegStar className="endScore"/> 
            }
          </div>
        ))
      }
    </div>
  )
}
