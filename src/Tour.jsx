import { useDispatch } from "react-redux";
import { removeItem } from "./slices/TourSlice";

export default function Cart({ id, title, price, image, info }) {
  const dispatch = useDispatch();
  return (
    <article className="single-tour">
      <img src={image} alt={title} />
      <footer>
        <div className="tour-info">
          <h4>{title}</h4>
          <h4 className="tour-price">{price} $</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn" onClick={() => dispatch(removeItem(id))}>
          not interested
        </button>
      </footer>
    </article>
  );
}
